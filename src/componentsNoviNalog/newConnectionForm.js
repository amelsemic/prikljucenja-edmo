import React, { useState, useContext } from "react";
/* import "./newConnectionForm.css"; */
import Razdioba3inputs from "./Razdioba3Inputs";
import Razdioba2Inputs from "./Razdioba2Inputs";
import PovecanjeSnage from "./PovecanjeSnage";
import Prikljucak from "./Prikljucak";
import { NaloziContext } from "../store/nalozi-context";
import classes from "./newConnectionForm.module.css";
const initialFormValue = {
  name: "",
  address: "",
  vrstaNaloga: "prikljucak",
  power: "",
  powerPprev: "",
  powerPnew: "",
  powerR1: "",
  powerR2: "",
  powerR3: "",
  date: "",
  checkbox: false,
  description: "",
  zavrsen: false,
  //novo
  datumZavrsetka: ""
};

const NewConnectionForm = () => {
  const { dodajNalog } = useContext(NaloziContext);

  const [formData, setFormData] = useState(initialFormValue);

  const handleChange = (e) => {
    const { name, checked, type, value } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      description:
        name === "checkbox" && !checked ? "" : prevFormData.description,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dodajNalog(formData);

    //pocistiti inpute
    setFormData(initialFormValue);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.myForm}>
      <div className={classes.formInputs}>
        <input
          placeholder="Ime i prezime"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength="25"
        />

        <input
          placeholder="Adresa"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          maxLength="30"
        />

        <select name="vrstaNaloga" id="vrstaNaloga" onChange={handleChange}>
          <option value="prikljucak"> Priključak</option>
          <option value="povecanje">Povećanje snage </option>
          <option value="razdioba2">Razdioba na 2 MM </option>
          <option value="razdioba3">Razdioba na 3 MM</option>
        </select>

        {formData.vrstaNaloga === "prikljucak" && (
          <Prikljucak formData={formData} onChange={handleChange} />
        )}

        {formData.vrstaNaloga === "povecanje" && (
          <PovecanjeSnage formData={formData} onChange={handleChange} />
        )}

        {formData.vrstaNaloga === "razdioba2" && (
          <Razdioba2Inputs formData={formData} onChange={handleChange} />
        )}

        {formData.vrstaNaloga === "razdioba3" && (
          <Razdioba3inputs formData={formData} onChange={handleChange} />
        )}
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label className={classes.gradRad}>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <p>Građevinski radovi</p>
        </label>
        {
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={2}
            placeholder="Kratak opis radova..."
            required={formData.checkbox}
            maxLength="80"
          />
        }
      </div>

      <button type="submit">Unesi </button>
    </form>
  );
};

export default NewConnectionForm;
