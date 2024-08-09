export default function InputForm({ type, placeholder, label }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-base font-normal">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-4 text-sm text-gray-700 rounded-xl border border-gray-200 focus:outline-blue-500"
        />
      </div>
    </>
  );
}
