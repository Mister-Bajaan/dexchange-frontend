"use client";

import { useState } from "react";

import ButtonUpdateAddComponent from "@components/ButtonComponents/BtnUpdateAdd/button";
import InputForm from "@components/FormComponents/input/input";

// Composants du formulaire

export default function FormComponent({
  titlePage,
  secondTitle,
  btnContent,
  onSubmit,
}) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !formData.nom ||
      !formData.prenom ||
      !formData.email ||
      !formData.role ||
      !formData.adresse ||
      !formData.phone
    ) {
      console.error("Données incomplètes");
      return;
    }
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <>
      <div className="flex flex-col px-6 pt-2 font-semibold space-y-4">
        <h2 className="text-[32px]">{titlePage}</h2>
        <div className="bg-white rounded-[10px] p-6 font-normal">
          <h3 className="mb-10">{secondTitle}</h3>
          <form className="grid grid-cols-2 gap-3" onSubmit={handleSubmit}>
            <InputForm
              label="Adresse e-mail"
              placeholder="alexander.foley@mail.com"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />

            <InputForm
              label="Numéro de téléphone"
              placeholder="(+237) 696 88 77 55"
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <InputForm
              label="Nom"
              placeholder="Alexandre"
              type="text"
              name="nom"
              id="nom"
              value={formData.nom}
              onChange={handleChange}
            />

            <InputForm
              label="Prénom"
              placeholder="Foley"
              type="text"
              name="prenom"
              id="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-base font-normal">
                Rôle
              </label>
              <select
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-4 text-sm text-gray-700 rounded-xl border border-gray-200 focus:outline-blue-500 bg-white"
              >
                <option value="" className="text-sm ">
                  Sélectionner un rôle
                </option>
                <option value="Admin">Admin</option>
                <option value="Agence">Agence</option>
                <option value="Client">Client</option>
                <option value="Mandataire">Mandataire</option>
              </select>
            </div>

            <InputForm
              label="Adresse"
              placeholder="Mariste, Dakar, Sénégal"
              type="text"
              name="adresse"
              id="adresse"
              value={formData.adresse}
              onChange={handleChange}
            />

            <ButtonUpdateAddComponent>{btnContent}</ButtonUpdateAddComponent>
          </form>
        </div>
      </div>
    </>
  );
}
