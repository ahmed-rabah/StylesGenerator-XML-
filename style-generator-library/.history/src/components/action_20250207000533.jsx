
export default function Actions({ theme }) {
    return (
        <footer className="flex items-center justify-around">
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl">
                generate css file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl">
                generate scc file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl">
                visualize result
            </button>
        </footer>
    )
}
