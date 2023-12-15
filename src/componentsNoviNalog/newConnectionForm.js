import React, { useState, useContext } from "react";
import "./newConnectionForm.css";
import Razdioba3inputs from "./Razdioba3Inputs";
import Razdioba2Inputs from "./Razdioba2Inputs";
import PovecanjeSnage from "./PovecanjeSnage";
import Prikljucak from "./Prikljucak";
import { NaloziContext } from "../store/nalozi-context";

const NewConnectionForm = () => {
  const {dodajNalog} = useContext(NaloziContext)

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    vrstaNaloga: "prikljucak",
    power: "",
    powerPprev: undefined,
    powerPnew: undefined,
    powerR1: undefined,
    powerR2: undefined,
    powerR3: undefined,
    date: undefined,
    checkbox: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, checked, type, value } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    if(name == "date"){
      console.log("e target:",e.target)
      const inputDate = new Date(e.target.value);
  
      const day = inputDate.getDate().toString().padStart(2, '0');
      const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
      const year = inputDate.getFullYear();
    
      const formattedDateString = `${day}/${month}/${year}`;
  
      const proba = new Date(formattedDateString)

      console.log("prva verzija datuma:", e.target.value)
      console.log("formatted string:", formattedDateString)
      console.log("proba ", proba)
    }
    
    setFormData((prevFormData) => ({
      ...prevFormData,
      description:
        name === "checkbox" && !checked ? "" : prevFormData.description,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dodajNalog(formData)

    /* 
    
    // kod prikazivanja datuma:
    
    console.log("e target name:",e.target.name)
    const inputDate = new Date(e.target.value);

    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
  
    const formattedDateString = `${day}/${month}/${year}`;

    const proba = new Date(formattedDateString)
 */
    console.log("form data:", formData)

    const noviDatum = new Date(formData.date)
    console.log(noviDatum.getFullYear())
  };

  return (
    <form onSubmit={handleSubmit} className="my-form">
      <div className="form-inputs">
        <input
          placeholder="Ime i prezime"
          type="text"
          name="name"
          /* value={formData.name} */
          onChange={handleChange}
          required
        />

        <input
          placeholder="Adresa"
          type="text"
          name="address"
          /* value={formData.address} */
          onChange={handleChange}
          required
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
        <input type="date" name="date" onChange={handleChange}  required/>
        <label className="gradRad">
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
          <p>Građevinski radovi</p>
        </label>
        {formData.checkbox && (
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={2}
            placeholder="Kratak opis radova..."
            required={formData.checkbox}
          />
        )}
      </div>

      <button type="submit">Unesi </button>
    </form>
  );
};

export default NewConnectionForm;
