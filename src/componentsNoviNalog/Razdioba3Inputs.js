import "./Razdiobe.css";

const Razdioba3Inputs = (props) => {
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
      <div className="inputs">
        <input
          placeholder="Nova snaga 1 (kW)"
          type="number"
          name="powerR1"
          step="0.1"
          value={props.formData.powerR1}
          onChange={props.onChange}
          required
        />

        <input
          placeholder="Nova snaga 2 (kW)"
          type="number"
          name="powerR2"
          step="0.1"
          value={props.formData.powerR2}
          onChange={props.onChange}
          required
        />

        <input
          placeholder="Nova snaga 3 (kW)"
          type="number"
          name="powerR3"
          step="0.1"
          value={props.formData.powerR3}
          onChange={props.onChange}
          required
        />
      </div>
    </>
  );
};

export default Razdioba3Inputs;
