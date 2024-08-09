export default function EtatBtn({ isActive }) {
  return (
    <button
      className={`px-4 py-1 rounded-full font-medium ${
        isActive ? "text-green-200 bg-green-100" : "text-red-800 bg-red-100"
      }`}
    >
      {isActive ? "Actif" : "Inactif"}
    </button>
  );
}
