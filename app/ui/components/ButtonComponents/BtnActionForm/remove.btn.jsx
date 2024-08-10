import ActionBtn from "./action.btn.component";

//bouton pour supprimer un utilisateur || deleteUser

export default function RemoveBtn({ onClick }) {
  return (
    <ActionBtn bgColor="bg-red-600" textColor="text-white" onClick={onClick}>
      Supprimer
    </ActionBtn>
  );
}
