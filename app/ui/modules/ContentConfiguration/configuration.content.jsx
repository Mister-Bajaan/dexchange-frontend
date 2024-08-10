import Image from "next/image";

// Components
import Topbar from "@components/LayoutsComponents/NavigationComponents/topbar/topbar.component";
import BtnAddUser from "@components/ButtonComponents/BtnAddUser/btn-add-user";
import Container from "@components/LayoutsComponents/containerCard/container";

import UserListContent from "./userList/user.list.content";

// Right section du Dashboard

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

      <Container>
        <UserListContent />
      </Container>
    </div>
  );
}
