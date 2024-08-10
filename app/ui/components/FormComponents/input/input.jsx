//components pour mes champs de formulaire ||  input

export default function InputForm({ type, placeholder, label, name, id, value, onChange }) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label className="text-base font-normal">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full p-4 text-sm  rounded-xl border border-gray-200 focus:outline-blue-500 placeholder-gray-800"
        />
      </div>
    </>
  );
}
