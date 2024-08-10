// import ButtonCTA from "../../app/ui/components/button/btn-CTA/button";
import { useState } from "react";
import FormPageContent from "../../app/ui/components/form-page-content";

const API_URL = "http://localhost:5050/user/postUser";

export default function PostAgent() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    adresse: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

      const result = await response.json();
      console.log("Réponse du serveur:", result);
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
  };

  return (
    <FormPageContent
      titlePage="Configuration"
      secondTitle="Adama Diom"
      btnContent="Soumettre"
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
