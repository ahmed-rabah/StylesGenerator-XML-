
export default function Actions({ theme }) {
    return (
        <footer className="flex items-center justify-around">
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-stone-200 cursor-pointer hover:scale-[3.2rem] transition-transform duration-100">
                generate css file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-stone-200 cursor-pointer hover:scale-50 transition-transform duration-100">
                generate scc file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-stone-200 cursor-pointer hover:scale-50 transition-transform duration-100">
                visualize result
            </button>
        </footer>
    )
}
