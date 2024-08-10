import Image from "next/image";
import Link from "next/link";
import ActiveBtn from "./active-link/active-btn";
import LinksComponent from "./links/links.component";

//Composant sidebar || sidebar

export default function Sidebar() {
  return (
    <>
      <div className="w-[256px] h-100% bg-navbar-image flex flex-col">
        <div className="flex flex-col items-center justify-center h-16 p-[10px] bg-blue-800 font-bold text-xl text-white">
          <h1>
            <Link href="/dashboard">DEXCHANGE</Link>
          </h1>
        </div>

        <div className="flex flex-col  px-5  w-full h-full mt-5 space-y-3  ">
          <LinksComponent
            srcImage1={"/assets/icons/setting.svg"}
            srcImage2={"/assets/icons/down-arrow.svg"}
            text="Configuration"
            textColor="text-white"
            href={"/updateUser"}
          />

          <ActiveBtn />

          <LinksComponent
            srcImage1={"/assets/icons/folder.svg"}
            srcImage2={"/assets/icons/up-arrow.svg"}
            text="Nouveau"
            textColor="text-white opacity-50"
            href={"/addUser"}
          />
        </div>

        <div className="px-5 py-4 flex items-center mb-5 gap-3   ">
          <Image
            src={"/assets/icons/log-out.svg"}
            alt="logo"
            width={36}
            height={36}
          />
          <h4 className="text-white text-sm">Deconnexion</h4>
        </div>
      </div>
    </>
  );
}
