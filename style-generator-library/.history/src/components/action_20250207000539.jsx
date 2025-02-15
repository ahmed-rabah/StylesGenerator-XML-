
export default function Actions({ theme }) {
    return (
        <footer className="flex items-center justify-around">
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-white">
                generate css file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-white">
                generate scc file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-white">
                visualize result
            </button>
        </footer>
    )
}
