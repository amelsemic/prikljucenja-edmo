import classes from "./Popis.module.css";
import Naslovi from "./Naslovi";
import Nalog from "./Nalog";
import { NaloziContext } from "../store/nalozi-context";
import { useContext } from "react";

const Popis = () => {
  const {zavrseniNalozi, nezavrseniNalozi, zavrsiNalog } = useContext(NaloziContext);

  return (
    <div className={classes.bckgrnd}>
      <Naslovi />
      {nezavrseniNalozi.map((nal) => {
        return <Nalog data={nal} onFinish={zavrsiNalog} />;
      })}
      <h2>Završeni nalozi</h2>
      {zavrseniNalozi.map((nal) => {
        return <Nalog data={nal} />;
      })}
    </div>
  );
};

export default Popis;
