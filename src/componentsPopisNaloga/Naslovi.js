import classes from "./Naslovi.module.css";

const Naslovi = () => {
  return (
    <div className={classes.topRow}>
      <div className={classes.title}>
        <p className={classes.text}>TIP NALOGA </p>
      </div>
      <div className={classes.title}>
        <p className={classes.text}>KUPAC </p>
      </div>
      <div className={classes.title}>
        <p className={classes.text}>LOKACIJA </p>
      </div>
      <div className={classes.title}>
        <p className={classes.text}>SNAGA (kW)</p>
      </div>
      <div className={classes.title}>
        <p className={classes.text}>DATUM NALOGA </p>
      </div>
      <div className={classes.title}>
        <p className={classes.text}>OPIS RADOVA</p>
      </div>
      <div className={classes.title}>
        <p className={classes.text}>ZAVRŠEN?</p>
      </div>
    </div>
  );
};

export default Naslovi;