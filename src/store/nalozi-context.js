import React, { useState, useEffect } from "react";
import { v4 as idGenerator } from "uuid";
import { compareByDate } from "./auxFunctions";

const NaloziContext = React.createContext();

const NaloziProvider = (props) => {
  const firebaseEndpoint =
    "https://prikljucenja-edmo-default-rtdb.asia-southeast1.firebasedatabase.app/nalozi.json";
  const [nalozi, setNalozi] = useState([]);
  const [osvjeziNaloge, setOsvjeziNaloge] = useState(false);

  //zavrseni i nezavrseni nalozi
  const [zavrseniNalozi, setZavrseniNalozi] = useState([]);
  const [nezavrseniNalozi, setNezavrseniNalozi] = useState([]);

  //povlacenje spiska naloga sa API...
  useEffect(() => {
    const fetchNalozi = async () => {
      try {
        const response = await fetch(firebaseEndpoint);
        if (!response.ok) throw response;
        const responseData = await response.json();
        const nalozi = Object.values(responseData);
        nalozi.sort(compareByDate);
        setNalozi(nalozi);

        setZavrseniNalozi(nalozi.filter((nal) => nal.zavrsen));
        setNezavrseniNalozi(nalozi.filter((nal) => !nal.zavrsen));
      } catch (err) {
        console.error("Fetching data unsuccessful: ", err);
      }
    };

    fetchNalozi();
  }, [osvjeziNaloge]);

  const dodajNalog = async (nalog) => {
    const uniqueNalog = {
      id: idGenerator(),
      ...nalog,
    };
    try {
      await fetch(firebaseEndpoint, {
        method: "POST",
        body: JSON.stringify(uniqueNalog),
      });
    } catch (err) {
      console.error(err);
    }
    setOsvjeziNaloge((prev) => !prev);
  };

  const zavrsiNalog = async (id) => {
    const index = nalozi.findIndex((nal) => nal.id === id);
    

     if(index!==-1){ 
      const azuriraniNalozi = nalozi.filter((nal) => nal.id != id);
      const azuriranNalog = { ...nalozi[index], zavrsen: true };
      azuriraniNalozi.push(azuriranNalog);
      try{
        const updateResponse = await fetch(firebaseEndpoint, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(azuriraniNalozi),
        });
        console.log(updateResponse)
        if (!updateResponse.ok) {
          throw new Error('Failed to update object in Firebase');
        }
        console.log('Object updated successfully');
      } catch(err){
        console.error('Error updating object:', err);
      } 
    } else console.error('Object not found in the array');
  
    setOsvjeziNaloge((prev) => !prev);
  };

  const ctxValue = {
    nalozi,
    zavrseniNalozi,
    nezavrseniNalozi,
    dodajNalog,
    zavrsiNalog,
  };

  return (
    <NaloziContext.Provider value={ctxValue}>
      {props.children}
    </NaloziContext.Provider>
  );
};

export { NaloziContext, NaloziProvider };
