import classes from "./Popis.module.css";
import Naslovi from "./Naslovi";
import Nalog from "./Nalog";
import PopisZavrNaloga from "./PopisZavrNaloga";
import { NaloziContext } from "../store/nalozi-context";
import { useContext } from "react";

const Popis = () => {
  const { zavrseniNalozi, nezavrseniNalozi, zavrsiNalog } =
    useContext(NaloziContext);

  return (
    <div className={classes.bckgrnd}>
      <Naslovi />
      {nezavrseniNalozi.map((nal) => (
        <Nalog key={nal.id} data={nal} onFinish={zavrsiNalog} />
      ))}
      <PopisZavrNaloga nalozi={zavrseniNalozi} />
    </div>
  );
};

export default Popis;
