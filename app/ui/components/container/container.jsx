export default function Container({ children }) {
    return (
        <div className="w-full bg-gray-100 flex flex-col px-6 pt-2 space-y-4">
            {children}
        </div>
    )
}