import Image from "next/image";
import Topbar from "../../components/topbar/topbar.component";
import BtnAddUser from "../../components/button/btn-add-user/btn-add-user";

export default function ContentConfiguration() {
  return (
    <div className="w-full bg-gray-100 space-y-4">
      <Topbar />
      <div className=" flex flex-col px-6 pt-2 font-semibold space-y-4">
        <h2 className="text-[32px]">Configuration</h2>
        <div className="relative max-w-[825px] ">
          <Image
            src="/assets/icons/search.svg"
            alt="content-configuration"
            width={15}
            height={15}
            className="absolute top-5 left-5"
          />
          <input
            type="search"
            className="w-full px-10 py-4 text-sm text-gray-700 bg-white rounded-[10px] border border-blue-500 focus:outline-none "
            placeholder="Vous cherchez quel utilisateur ..."
          />
        </div>

        <BtnAddUser />
      </div>
    </div>
  );
}
