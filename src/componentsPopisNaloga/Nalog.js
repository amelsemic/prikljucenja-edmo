import classes from "./Nalog.module.css";
import ImgIcon from "../imgs/ImgIcon";
import excavator from "../imgs/excavator.png"
import { snagaText, dateFormatter, olderThan30Days} from "../store/auxFunctions";
import { useState } from "react";
import UnosDatumaZavrsetka from "./UnosDatumaZavrsetka";

const Nalog = (props) => {
  const power = snagaText(props.data);
  const formatiranDatum = dateFormatter(props.data.date);
  const formatiranDatumZavrsetka = dateFormatter(props.data.datumZavrsetka)
  const [showZavrsniDatum, setShowZavrsniDatum] = useState(false)

  return (
    <div className={(props.nezavrsen && olderThan30Days(props.data.date)) ? classes.oldDate : classes.wrapper} >
      <div className={classes.field}>
        <ImgIcon vrstaNaloga={props.data.vrstaNaloga} />
      </div>
      <div className={classes.field}>
        <p className={classes.text}>{props.data.name} </p>
      </div>
      <div className={classes.field}>
        <p className={classes.text}> {props.data.address} </p>
      </div>
      <div className={classes.field}>
        <p className={classes.text}> {power} </p>
      </div>
      <div className={classes.field}>
        <p className={classes.text}> {formatiranDatum} </p>
      </div>
      <div className={classes.field}>
        <p className={classes.text}> {props.data.description || "/"} </p>
      </div>
      {props.nezavrsen && <div className={classes.field}>
        <button className={classes.zavrsiButton} onClick={()=> setShowZavrsniDatum(true)} >Završi</button>
      </div>}
      {props.data.checkbox && <img className={classes.excv} src={excavator} alt="građ.radovi" />}
      {!props.nezavrsen && <div className={classes.field}>
        <p className={classes.text}> {formatiranDatumZavrsetka} </p>
      </div>}
      {showZavrsniDatum && <UnosDatumaZavrsetka data={props.data} onClose={()=>{setShowZavrsniDatum(false)}} />}
    </div>
  );
};

export default Nalog;
