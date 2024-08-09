"use client";
import { useState } from "react";
import FormPageContent from "../layout/form-page.content";

const API_URL = "http://localhost:5050/user/postUser";

export default function ContentAdd() {
  const [formData, setFormData] = useState({}); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur HTTP: ' + response.status);
      }

      const result = await response.json();
      console.log(result);

    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  return (
    <div className="w-full bg-gray-100 space-y-4">
      <FormPageContent
        titlePage="Configuration"
        secondTitle="Adama Diom"
        btnContent="Sauvegarder"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
