import EtatBtn from "@components/ButtonComponents/BtnActifInactif/etat.btn";
import GetBtn from "@components/ButtonComponents/BtnActionForm/get.btn";
import RemoveBtn from "@components/ButtonComponents/BtnActionForm/remove.btn";

import { fetchData } from "@api/fetchApi/Getdata.fetch";

// Affichage des données de l'utilisateur dans le Dashboard

export default async function UserListContent() {
  const Getdata = await fetchData();


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
          {Getdata.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 text-sm font-medium text-black">
                {user.nom}
              </td>
              <td className="px-6 py-4 text-sm text-black">{user.prenom}</td>
              <td className="px-6 py-4 text-sm text-black">
                {user.email}
              </td>
              <td className="px-6 py-4 text-sm text-black">{user.role}</td>
              <td className="px-6 py-4 text-sm text-black">
                <EtatBtn isActive={user.status === "actif"} />
              </td>
              <td className="px-6 py-4 text-sm text-black flex gap-1">
                <GetBtn />
                <RemoveBtn />
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
