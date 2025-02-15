import { XMLBuilder } from "fast-xml-parser";
export default function Actions({ theme }) {

    const convertToXML = () => {
        const builder = new XMLBuilder({
            format: true,
            attributeNamePrefix: "",
            ignoreAttributes: false,
            suppressEmptyNode: true,
        });

        const xmlStructure = {
            theme: {
                element: elements.map((el) => ({
                    name: el.tag,
                    id: el.id,
                    class: el.class,
                    color: {
                        textColor: el.textColor,
                        backgroundColor: el.backgroundColor,
                        borderColor: el.borderColor,
                    },
                    police: {
                        fontFamily: el.fontFamily,
                        fontStyle: el.fontStyle,
                        fontWeight: el.fontWeight,
                        fontSize: { "#text": el.fontSize[0], unit: el.fontSize[1] },
                        textAlign: el.textAlign,
                    },
                    alignement: {
                        width: { "#text": el.width[0], unit: el.width[1] },
                        height: { "#text": el.height[0], unit: el.height[1] },
                        margin: { "#text": el.margin[0], unit: el.margin[1] },
                        padding: { "#text": el.padding[0], unit: el.padding[1] },
                    },
                })),
            },
        };

        return builder.build(xmlStructure);
    };

    return (
        <footer className="flex items-center justify-around mt-4">
            <button onClick={() => {
                console.log(convertToXML());
            }}
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
