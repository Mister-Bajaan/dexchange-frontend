import ButtonUpdateAddComponent from "@components/ButtonComponents/BtnUpdateAdd/button";
import InputForm from "@components/FormComponents/input/input";

// Composants du formulaire 

export default function FormComponent({
  titlePage,
  secondTitle,
  btnContent,
}) {
  return (
    <>
      <div className="flex flex-col px-6 pt-2 font-semibold space-y-4">
        <h2 className="text-[32px]">{titlePage}</h2>
        <div className="bg-white rounded-[10px] p-6 font-normal">
          <h3 className="mb-10">{secondTitle}</h3>
          <form className="grid grid-cols-2 gap-3">
            <InputForm
              label="Adresse e-mail"
              placeholder="alexander.foley@mail.com"
              type="email"
              name="email"
              id="email"
            />

            <InputForm
              label="Numéro de téléphone"
              placeholder="(+237) 696 88 77 55"
              type="tel"
              name="phone"
              id="phone"
            />

            <InputForm
              label="Nom"
              placeholder="Alexandre"
              type="text"
              name="nom"
              id="nom"
            />

            <InputForm
              label="Prénom"
              placeholder="Foley"
              type="text"
              name="prenom"
              id="prenom"
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="role" className="text-base font-normal">
                Rôle
              </label>
              <select
                name="role"
                id="role"
                className="w-full p-4 text-sm text-gray-700 rounded-xl border border-gray-200 focus:outline-blue-500 bg-white"
              >
                <option value="" className="text-sm ">
                  Sélectionner un rôle
                </option>
                <option value="agence">Admin</option>
                <option value="agent">Agence</option>
                <option value="admin">Client</option>
                <option value="mandataire">Mandataire</option>
              </select>
            </div>

            <InputForm
              label="Adresse"
              placeholder="Mariste, Dakar, Sénégal"
              type="text"
              name="adresse"
              id="adresse"
            />

            <ButtonUpdateAddComponent>{btnContent}</ButtonUpdateAddComponent>
          </form>
        </div>
      </div>
    </>
  );
}
