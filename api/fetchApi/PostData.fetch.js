import API_URL from "@api/utils/utils.api";

// Fonction pour envoyer les données du formulaire
export async function PostUserData(formData) {
  try {
    const response = await fetch(`${API_URL}postUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Pour obtenir le message d'erreur détaillé
      throw new Error(
        `Erreur lors de l'envoi des données: ${response.statusText}`
      );
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données:", error);
  }
}
