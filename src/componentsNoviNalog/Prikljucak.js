
const Prikljucak = (props) => {

    return           <input
    placeholder="Snaga (kW)"
    type="number"
    step="0.1"
    name="power"
    value={props.formData.power}
    onChange={props.onChange}
    required
  />
}

export default Prikljucak