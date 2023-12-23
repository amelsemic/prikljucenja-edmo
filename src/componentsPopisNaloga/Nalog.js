import classes from "./Nalog.module.css";
import ImgIcon from "../imgs/ImgIcon";
import excavator from "../imgs/excavator.png"
import { snagaText, dateFormatter } from "../store/auxFunctions";

const Nalog = (props) => {
  const power = snagaText(props.data);
  const formatiranDatum = dateFormatter(props.data.date);

  return (
    <div className={classes.wrapper}>
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
      {props.onFinish && <div className={classes.field}>
        <button className={classes.zavrsiButton} onClick={()=> props.onFinish(props.data.id)} >Završi</button>
      </div>}
      {props.data.checkbox && <img className={classes.excv} src={excavator} />}
    </div>
  );
};

export default Nalog;
