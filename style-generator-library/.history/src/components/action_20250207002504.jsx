
export default function Actions({ theme }) {
    return (
        <footer className="flex items-center justify-around mt-4">
            <button onClick={generateXML}
                className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-stone-200 cursor-pointer hover:opacity-80 transition-opacity duration-100">
                generate css file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-stone-200 cursor-pointer hover:opacity-80 transition-opacity duration-100">
                generate scc file
            </button>
            <button className="bg-blue-500 p-4 rounded-3xl font-rubik text-xl text-stone-200 cursor-pointer hover:opacity-80 transition-opacity duration-100">
                visualize result
            </button>
        </footer>
    )
    function generateXML() {
        let xmlFile = `<?xml version="1.0" encoding="UTF-8"?>`;
        console.log(xmlFile);

    }




}
