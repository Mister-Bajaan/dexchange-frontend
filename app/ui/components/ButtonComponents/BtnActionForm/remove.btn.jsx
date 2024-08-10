import ActionBtn from "./action.btn.component";

export default function RemoveBtn({ onClick }) {
  return (
    <ActionBtn
      bgColor="bg-red-600"
      textColor="text-white"
      onClick={() => {
        console.log('RemoveBtn clicked'); // Ajoutez cette ligne
        onClick();
      }}
    >
      Supprimer
    </ActionBtn>
  );
}
