// Composants de type button pour les formulaires || Sauvegarder/Modifier

export default function ButtonUpdateAddComponent({ children }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white max-w-[130px] font-normal py-3 px-4 rounded-[10px] mt-12 inline-block text-center"
    >
      {children}
    </button>
  );
}
