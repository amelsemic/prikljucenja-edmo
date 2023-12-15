import React, { useState, useEffect } from "react";
import { useCallback } from "react";

const NaloziContext = React.createContext();

const NaloziProvider = (props) => {
  //povlacenje spiska naloga sa API...



  const [ dummyNalozi, setDummyNalozi]  = useState([
    {
      name: "Amel Šemić",
      address: "16.ulica 187, Mostar",
      vrstaNaloga: "razdioba2",
      power: undefined,
      powerPprev: "15",
      powerPnew: undefined,
      powerR1: "10",
      powerR2: "5",
      powerR3: undefined,
      date: "01/01/2023",
      checkbox: true,
      description: "1 AB stub, podzemno pa na betonski temelj",
    },
    {
      name: "Arman Puce",
      address: "16.ulica 187, Mostar",
      vrstaNaloga: "povecanje",
      power: undefined,
      powerPprev: "6.7",
      powerPnew: "15",
      powerR1: undefined,
      powerR2: undefined,
      powerR3: undefined,
      date: "01/01/2023",
      checkbox: true,
      description: "2 AB stub, MO na stub",
    },
  ]);

  const dodajNalog = async (nalog) => {

    console.log("nalog koji se salje na firebase: ===>", nalog)
    try{
        await fetch(
            "https://prikljucenja-edmo-default-rtdb.asia-southeast1.firebasedatabase.app/nalozi.json",
            {
                method: "POST",
                body: JSON.stringify(nalog),
            }
            );
        } catch(err) {
            console.error(err)
        }

    setDummyNalozi([...dummyNalozi, nalog])
  };

  const ctxValue = {
    nalozi: dummyNalozi,
    dodajNalog
  };

  return (
    <NaloziContext.Provider value={ctxValue}>
      {props.children}
    </NaloziContext.Provider>
  );
};

export { NaloziContext, NaloziProvider };
