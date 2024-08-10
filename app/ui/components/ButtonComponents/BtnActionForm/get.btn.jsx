import Link from "next/link";

import ActionBtn from "./action.btn.component";

//bouton pour afficher les informations d'un utilisateur || getOneUser

export default function GetBtn() {
  return (
    <ActionBtn
      bgColor="bg-white"
      textColor="text-blue-400"
      borderColor="border-blue-400"
    >
      <Link href="/updateUser">VOIR</Link>
    </ActionBtn>
  );
}
