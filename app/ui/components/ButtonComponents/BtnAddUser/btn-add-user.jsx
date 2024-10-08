import Image from "next/image";
import Link from "next/link";

//bouton pour ajouter un utilisateur || ajouter un utilisateur dans le Dashboard

export default function BtnAddUser() {
  return (
    <Link href="/addUser">
      <div className="flex items-center justify-between bg-blue-500 max-w-[226px] p-4 rounded-[10px] cursor-pointer hover:bg-blue-400">
        <div>
          <p className="text-white text-lg font-normal">
            Ajouter un utilisateur
          </p>
        </div>

        <div>
          <Image
            src={"/assets/icons/add.svg"}
            alt="add-user"
            width={10}
            height={10}
          />
        </div>
      </div>
    </Link>
  );
}
