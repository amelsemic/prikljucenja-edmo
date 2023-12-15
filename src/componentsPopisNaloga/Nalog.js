import classes from "./Nalog.module.css";
import ImgIcon from "../imgs/ImgIcon";
import { snagaText } from "./auxFunctions";

const Nalog = (props) => {

  const power = snagaText(props.data)

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
        {/* sta ako je povecanje, razdioba2, 3 */}
      </div>
      <div className={classes.field}>
        <p className={classes.text}> {props.data.date}   </p>
      </div>
      <div className={classes.field}>
        <p className={classes.text}> {props.data.description || "X"}  </p>
      </div>

    </div>
  );
};

export default Nalog;
