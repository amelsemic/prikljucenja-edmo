import Nalog from "./Nalog";
import classes from "./PopisZavrNaloga.module.css";
import { organizeEventsByMonth } from "../store/auxFunctions";
const PopisZavrNaloga = (props) => {
  const naloziRazvrPoMjesecima = organizeEventsByMonth(props.nalozi);
  const mjeseci = Object.keys(naloziRazvrPoMjesecima);

  return (
    <div className={classes.wrapper}>
      <h1>Završeni nalozi</h1>
      {mjeseci.map((mj) => (
        <div key={mj}>
          <h2>{mj}</h2>
          {naloziRazvrPoMjesecima[`${mj}`].map((nal) => (
            <Nalog key={nal.id} data={nal} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PopisZavrNaloga;
