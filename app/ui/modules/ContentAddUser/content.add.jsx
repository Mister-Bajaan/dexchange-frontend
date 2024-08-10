"use client";

import { useState } from "react";

import FormPageContent from "@components/FormComponents/form/FormComponent";
import Topbar from "@components/LayoutsComponents/NavigationComponents/topbar/topbar.component";

import { PostUserData } from "@api/fetchApi/PostData.fetch";

export default function ContentAdd() {
  const handleSubmit = async (formData) => {
    console.log("Form Data:", formData);
    try {
      const result = await PostUserData(formData);
      if (result) {
        alert("Add successfully");
        console.log(result);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
    }
  };

  return (
    <div className="w-full bg-gray-100 space-y-4">
      <Topbar />
      <FormPageContent
        titlePage="Configuration"
        secondTitle="Ajouter un compte"
        btnContent="Sauvegarder"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
