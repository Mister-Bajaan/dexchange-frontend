// import API_URL from "../utils.api";
const API_URL = "http://localhost:5050/user/getUser/";

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
