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
                element: theme.map((el) => ({
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
    function fetchData() {

        const xmlFile = `<?xml version="1.0" encoding="UTF-8"?>` + convertToXML()
        console.log(xmlFile);
        fetch("http://127.0.0.1:5000/convert/css", {
            method: "POST",
            body: { xml: xmlFile },
        })
            .then(response => response.json())
            .then(data => console.log("Success2:", data))
            .catch(error => console.error("Error2:", error));
    }
    return (
        <footer className="flex items-center justify-around mt-4">
            <button onClick={fetchData}
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
