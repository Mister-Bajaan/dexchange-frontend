import ButtonCTA from "../../components/button/btn-CTA/button";
import InputForm from "../../components/input/input";
import Topbar from "../../components/topbar/topbar.component";

export default function FormPageContent({ titlePage, SecondTitle, btnContent }) {
  return (
    <>
      <Topbar />

      <div className="flex flex-col px-6 pt-2 font-semibold space-y-4">
        <h2 className="text-[32px]">{titlePage}</h2>
        <div className="bg-white rounded-[10px] p-6 font-normal">
          <h3 className="mb-10">{SecondTitle}</h3>
          <div className="grid grid-cols-2 gap-3">
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

            <InputForm label="Nom" placeholder="Alexander" type="text" name="name" id="name" />

            <InputForm label="Prénom" placeholder="Foley" type="text" name="prenom" id="prenom" />

            <div className="flex flex-col gap-2">
              <label className="text-base font-normal">Role</label>
              <select className="w-full p-4 text-sm text-gray-700 rounded-xl border border-gray-200 focus:outline-blue-500 bg-white">
                <option>Agence</option>
                <option>Agence</option>
                <option>Agence</option>
                <option>Agence</option>
                <option>Agence</option>
              </select>
            </div>

            <InputForm
              label="Adresse"
              placeholder="Mariste, Dakar, Sénégal "
              type="text"
              name="adresse"
              id="adresse"
            />
          </div>
          <ButtonCTA>{btnContent}</ButtonCTA>
        </div>
      </div>
    </>
  );
}
