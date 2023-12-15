import classes from "./Popis.module.css";
import Naslovi from "./Naslovi";
import Nalog from "./Nalog";
import { NaloziContext } from "../store/nalozi-context";
import { useContext } from "react";

const Popis = () => {
  const { nalozi } = useContext(NaloziContext);

  /*   const dummyNalozi = [
    {
      name: "Amel Šemić",
      address: "16.ulica 187, Mostar",
      vrstaNaloga: "razdioba2",
      power: "6.7",
      powerPprev: undefined,
      powerPnew: undefined,
      powerR1: undefined,
      powerR2: undefined,
      powerR3: undefined,
      checkbox: true,
      description: "1 AB stub, podzemno pa na betonski temelj",
    },
    {
      name: "Arman Puce",
      address: "16.ulica 187, Mostar",
      vrstaNaloga: "razdioba3",
      power: "10",
      powerPprev: undefined,
      powerPnew: undefined,
      powerR1: undefined,
      powerR2: undefined,
      powerR3: undefined,
      checkbox: true,
      description: "2 AB stub, MO na stub",
    },
  ]; */
  console.log(nalozi)
  return (
    <div className={classes.bckgrnd}>
      <Naslovi />
     {nalozi.map((nal) => {
        return <Nalog data={nal} />;
      })}
    </div>
  );
};

export default Popis;
