import EtatBtn from "../../../components/button/active-inactif/etat.btn";
import GetBtn from "../../../components/button/btn-action/get.btn";
import RemoveBtn from "../../../components/button/btn-action/remove.btn";

import { fetchData } from "../../../../../api/fetchApi/data.fetch";

export default async function UserListContent() {
  const userData = await fetchData();

  console.log("Données utilisateur:", userData);

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
          {userData.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 text-sm font-medium text-black">
                {user.nom}
              </td>
              <td className="px-6 py-4 text-sm text-black">{user.prenom}</td>
              <td className="px-6 py-4 text-sm text-black">{user.email}</td>
              <td className="px-6 py-4 text-sm text-black">{user.Role}</td>
              <td className="px-6 py-4 text-sm text-black">
                <EtatBtn isActive={user.status === "actif"} />
              </td>
              <td className="px-6 py-4 text-sm text-black flex gap-1">
                <GetBtn />
                <RemoveBtn />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
