import API_URL from "@api/utils/utils.api";

/**
 * next : {revalidate : 5} :
 * rafraichissement de la page après 5 secondes
 * le probleme que j'avais c'etais le fais que le fetch ne se fait pas à chaque fois
 * et que le cache n'est mis à jour
 */

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/getUser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 5 }, // a changer au besoin pour optimiser la performance
    });

    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des users: ${response.statusText}`
      );
    }

    const usersData = await response.json();
    return usersData;
  } catch (error) {
    console.error("Erreur lors de la récupération des users:", error);
  }
};
