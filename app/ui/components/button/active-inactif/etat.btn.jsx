export default function EtatBtn({ isActive }) {
  if (isActive) {
    return (
      <>
        <button className="px-4 py-1 text-green-200 bg-green-100 rounded-full font-medium">
          Actif
        </button>
      </>
    );
  } else
    return (
      <>
        <button className="px-4 py-1 text-red-800 bg-red-100 rounded-full font-medium">
          Inactif
        </button>
      </>
    );
}
