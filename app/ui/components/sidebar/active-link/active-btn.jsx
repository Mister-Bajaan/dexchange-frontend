import Link from "next/link";

export default function ActiveBtn() {
    return (
        <div className="bg-blue-300 px-9 py-2 rounded-lg text-white font-medium">
            <Link href={"/dashboard"}>LISTE USERS</Link>
        </div>
    )
}
