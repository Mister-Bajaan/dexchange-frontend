//container pour la table et les forms

export default function Container({ children }) {
  return (
    <div className="bg-white rounded-[10px] p-6 font-normal mx-6">
      {children}
    </div>
  );
}
