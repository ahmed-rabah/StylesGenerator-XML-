
export default function Actions({ theme }) {

    function generateXML() {
        return (
            {
                theme
                //             theme.map(selector => {
                //                 return (
                //                     `
                // <element name="${selector.tag}" id="${selector.id}" class="${selector.class}">
                //     <color>
                //         <textColor>${selector.textColor}</textColor>
                //         <backgroundColor>${selector.backgroundColor}</backgroundColor>
                // 		<borderColor>${selector.borderColor}</borderColor>
                //     </color>
                //     <police>
                // 		<fontFamily>${selector.fontFamily}</fontFamily>
                // 		<fontStyle>${selector.fontStyle}</fontStyle>
                // 		 <fontWeight>${selector.fontWeight}</fontWeight>
                // 		 <fontSize unit="${selector.fontSize[1]}">${selector.fontSize[0]}</fontSize>

                // 		<textAlign>${selector.textAlign}</textAlign>
                // 	</police>
                // 	<alignement>
                // 		<width unit="${selector.width[1]}">${selector.width[0]}</width>
                // 		<height unit="${selector.height[1]}">${selector.height[0]}</height>
                // 		<margin unit="${selector.margin[1]}">${selector.margin[0]}</margin>
                // 		<padding unit="${selector.padding[1]}">${selector.padding[0]}</padding>
                // 	</alignement>
                // </element>                    
                //                 `
                //                 )
                //             })
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
