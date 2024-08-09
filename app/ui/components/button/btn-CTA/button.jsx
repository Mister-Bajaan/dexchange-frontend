export default function ButtonCTA({ children }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded-[10px] mt-12">
      {children}
    </button>
  );
}
