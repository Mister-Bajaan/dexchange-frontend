import API_URL from "@api/utils/utils.api";

export default async function getOneUserData(userId) {
  try {
    const response = await fetch(`${API_URL}/users/updateOneUser/{userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


export default async function editUserData({params}) {

    const {userId} = params;
    const userData = await getOneUserData(userId);

    const data = {}

  return fetch(`${API_URL}/users/updateOneUser/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
