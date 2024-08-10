import Image from "next/image";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4 bg-white  ">
      <div>
        <h4 className="text-gray-500">Utilisateurs</h4>
      </div>

      <div className="flex items-center gap-2 ">
        <div>
          <Image
            src={"/assets/images/profil.svg"}
            alt="logo"
            width={40}
            height={40}
          />
        </div>

        <div className="flex flex-col  text-sm">
          <p>Omar FALL</p>
          <p>fallo@dexchange.sn</p>
        </div>
      </div>
    </div>
  );
}
