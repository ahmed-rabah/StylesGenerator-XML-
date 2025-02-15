
export default function Actions({ theme }) {

    function generateXML() {
        return (
            `<?xml version="1.0" encoding="UTF-8"?>` +
            {
                theme.map(Element => {
                    return (
                        `
                                    <element name="h1" id="id" class="class">
                    <color>
                        <textColor>red</textColor>
                        <backgroundColor>black</backgroundColor>
                        <borderColor>blue</borderColor>
                    </color>
                    <police>
                        <fontFamily>"Times New Roman", Times, serif</fontFamily>
                        <fontStyle>normal</fontStyle>
                        <fontWeight>normal</fontWeight>
                        <fontSize unit="px">30</fontSize>
                        
                        <textAlign>center</textAlign>
                    </police>
                    <alignement>
                        <width unit="px">200</width>
                        <height unit="px">400</height>
                        <margin unit="px">0</margin>
                        <padding unit="px">0</padding>
                    </alignement>
                </element>
                    `
                    )
                })
            }
        )
    }

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




}
