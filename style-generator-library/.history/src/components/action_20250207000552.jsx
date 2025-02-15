
export default function Actions({ theme }) {
    return (
        <footer className="flex items-center justify-around">
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-slate-300">
                generate css file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-slate-300">
                generate scc file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-slate-300">
                visualize result
            </button>
        </footer>
    )
}
