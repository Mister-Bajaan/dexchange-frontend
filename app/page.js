/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex ">
      <div className="w-full bg-gray-100 space-y-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          Page inexitant, utiliser l'url /dashboard
        </h1>
        <Link href="/dashboard">Cliquer ici </Link>
      </div>
    </div>
  );
}
