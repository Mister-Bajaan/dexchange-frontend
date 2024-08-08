import Image from "next/image";
import ActiveBtn from "./button/active-btn";
import LinksComponent from "./links/links.component";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
      <div className="w-[256px] h-screen bg-navbar-image flex flex-col">
        <div className="flex flex-col items-center justify-center h-16 p-[10px] bg-blue-800 font-bold text-xl text-white">
          <h1>DEXCHANGE</h1>
        </div>

        {/* TODO: revoir le border-b de la sidebar pour que ca ne prend pas tout le contenue, et le gradient */}
        <div className="flex flex-col  px-5  w-full h-full mt-5 space-y-3  border-b-2 border-blue-700">
          <Link href="/update-user">
            <LinksComponent
              srcImage1={"/assets/icons/setting.svg"}
              srcImage2={"/assets/icons/down-arrow.svg"}
              text="Configuration"
              textColor="text-white"
            />
          </Link>

          <Link href="/">
            <ActiveBtn />
          </Link>

          <Link href="/add-user">
            <LinksComponent
              srcImage1={"/assets/icons/folder.svg"}
              srcImage2={"/assets/icons/up-arrow.svg"}
              text="Nouveau"
              textColor="text-white opacity-50"
            />
          </Link>
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
