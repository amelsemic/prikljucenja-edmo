const PovecanjeSnage = (props) => {
    const strelica = "==>";
  return (
    <>
      <input
        placeholder="Stara snaga (kW)"
        type="number"
        step="0.1"
        name="powerPprev"
        value={props.formData.powerPprev}
        onChange={props.onChange}
        required
      />
      {strelica}
      <input
        placeholder="Nova snaga (kW)"
        type="number"
        step="0.1"
        name="powerPnew"
        value={props.formData.powerPnew}
        onChange={props.onChange}
        required
      />
    </>
  );
};

export default PovecanjeSnage;
