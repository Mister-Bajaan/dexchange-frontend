import API_URL from "@api/utils/utils.api";

export const DeleteUserData = async (id) => {
  try {
    const response = await fetch(`${API_URL}/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Gestion des erreurs HTTP
      const errorMessage = await response.text();
      throw new Error(`Erreur HTTP: ${response.status} - ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur lors de la suppression des données :", error.message);
    throw error;
  }
};
