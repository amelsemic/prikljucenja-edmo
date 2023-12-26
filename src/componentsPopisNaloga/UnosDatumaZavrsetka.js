import { useState, useContext } from "react";
import Modal from "../UI/Modal";
import { NaloziContext } from "../store/nalozi-context";

//ovdje je logika unosenja datuma zavrsetka radova!!!

const UnosDatumaZavrsetka = (props) => {
  const { zavrsiNalog } = useContext(NaloziContext);
  const [datumZavrsetka, setDatumZavrsetka] = useState("");
  console.log(datumZavrsetka);

  const handleChange = (e) => {
    console.log(e.target.value);
    setDatumZavrsetka(e.target.value);
  };

  const handleZavrsavanjeNaloga = () => {
    console.log(datumZavrsetka)
    zavrsiNalog(props.data.id, datumZavrsetka)
    setDatumZavrsetka("");
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <input type="date" value={datumZavrsetka} onChange={handleChange} />
      <button
        disabled={datumZavrsetka === ""}
        onClick={handleZavrsavanjeNaloga}
      >
        Završi nalog
      </button>
    </Modal>
  );
};

export default UnosDatumaZavrsetka;
