"use client";

import { useEffect, useState } from "react";

import EtatBtn from "@components/ButtonComponents/BtnActifInactif/etat.btn";
import GetBtn from "@components/ButtonComponents/BtnActionForm/get.btn";
import RemoveBtn from "@components/ButtonComponents/BtnActionForm/remove.btn";

import { fetchData } from "@api/fetchApi/GetData.fetch";
import { DeleteUserData } from "@api/fetchApi/DeleteData.fetch";

// Affichage des données de l'utilisateur dans le Dashboard

export default function UserListContent() {
  // const Getdata = await fetchData();

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await fetchData();
    // console.log(data);
    setUsers(data);
  };

  const handleDelete = async (id) => {
    console.log('Delete button clicked for id:', id); // Ajoutez cette ligne
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      try {
        await DeleteUserData(id);
        fetchUsers();
      } catch (error) {
        console.error("Erreur lors de la suppression :", error.message);
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-base font-medium text-gray-400">
              Noms
            </th>
            <th className="px-6 py-3 text-left text-base font-medium text-gray-400">
              Prénoms
            </th>
            <th className="px-6 py-3 text-left text-base font-medium text-gray-400">
              E-mails
            </th>
            <th className="px-6 py-3 text-left text-base font-medium text-gray-400">
              Rôles
            </th>
            <th className="px-6 py-3 text-left text-base font-medium text-gray-400">
              Status
            </th>
            <th className="px-6 py-3 text-left text-base font-medium text-gray-400">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 text-sm font-medium text-black">
                {user.nom}
              </td>
              <td className="px-6 py-4 text-sm text-black">{user.prenom}</td>
              <td className="px-6 py-4 text-sm text-black">{user.email}</td>
              <td className="px-6 py-4 text-sm text-black">{user.role}</td>
              <td className="px-6 py-4 text-sm text-black">
                <EtatBtn isActive={user.status === "actif"} />
              </td>
              <td className="px-6 py-4 text-sm text-black flex gap-1">
                <GetBtn />
                <RemoveBtn onClick={() => handleDelete(user._id)} />
              </td>
            </tr>
          ))}
          {/* <tr>
            <td className="px-6 py-4 text-sm font-medium text-black">
              Alexander
            </td>
            <td className="px-6 py-4 text-sm text-black">Foley</td>
            <td className="px-6 py-4 text-sm text-black">
              alexander.foley@mail.com
            </td>
            <td className="px-6 py-4 text-sm text-black">Admin</td>
            <td className="px-6 py-4 text-sm text-black">
              <EtatBtn isActive={true} />
            </td>
            <td className="px-6 py-4 text-sm text-black flex gap-1">
              <GetBtn />
              <RemoveBtn />
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
