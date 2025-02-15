import { PenOff } from "lucide-react"
import { useState } from "react";
export default function EditSide({ element }) {

    const [color, setColor] = useState("#3498db"); // Default color

    function handleChange(e) {
        setColor(e.target.value);
    };
    return (
        <div className="col-span-4 py-4 pl-3 border-gray-300 border-l-2 bg-[#F5F5F5] mt-2 rounded-lg text-xl">
            {
                element &&
                (<>
                    <div className="">
                        <label className="font-rubik text-2xl ">Tag :</label>
                        <div className="relative w-[100%]">
                            <PenOff className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={15} />
                            <input type="text" disabled value={element.tag} className="pl-10 pr-3 py-1 border-2 rounded-md text-base w-[90%] font-medium" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="font-rubik text-2xl  md:block">Class :</label>
                        <input type="text" value={element.class} onChange={() => { }} className="pl-3 pr-3 py-1 border-2 text-base font-medium rounded-md w-[90%] bg-white " />
                    </div>
                    <div className="w-[100%] ">
                        <label className="font-rubik text-2xl  md:block">Id :</label>
                        <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black" />
                    </div>
                    <div className="w-[100%] ">
                        <label className="font-rubik text-2xl  md:block">Text Color:</label>
                        <input type="color" value={element.textColor} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black" />
                    </div>
                    <div className="max-w-sm mx-auto p-4 border rounded-lg shadow-md text-center">
                        <h2 className="text-lg font-semibold mb-4">🎨 Color Picker</h2>
                        <input
                            type="color"
                            value={color}
                            onChange={handleChange}
                            className="w-16 h-16 cursor-pointer border rounded-md"
                        />
                        <input
                            type="text"
                            value={color}
                            onChange={handleChange}
                            className="block w-full mt-3 px-3 py-2 border rounded-md text-center"
                        // maxLength={7}
                        />

                        {/* Color Preview Box */}
                        <div
                            className="w-full h-20 mt-4 rounded-md shadow-inner border"
                            style={{ backgroundColor: color }}
                        ></div>
                    </div>
                </>
                )
            }
        </div >
    )
}
const handleColorChange = (input: string) => {
    let tempColor = input.trim(); // Remove extra spaces

    // Check if it's a named color (e.g., "red", "blue")
    const testElement = new Option().style;
    testElement.color = tempColor;
    if (testElement.color) {
        setColor(tempColor); // Valid named color
        return;
    }

    // Check if it's an RGB format
    const rgbMatch = tempColor.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
    if (rgbMatch) {
        const r = parseInt(rgbMatch[1], 10);
        const g = parseInt(rgbMatch[2], 10);
        const b = parseInt(rgbMatch[3], 10);

        if (r <= 255 && g <= 255 && b <= 255) {
            setColor(rgbToHex(r, g, b)); // Convert RGB to hex for color input
            return;
        }
    }

    // Check if it's a valid hex code (#RRGGBB or #RGB)
    const hexMatch = tempColor.match(/^#([0-9A-Fa-f]{3}){1,2}$/);
    if (hexMatch) {
        setColor(tempColor);
        return;
    }
};

// "idEl": uuidv4(),
// "tag": tag,
// "class": "",
// "id" : "" ,
// "textColor": "",
// "backgroundColor": "",
// "borderColor": "",
// "fontFamily": "",
// "fontStyle": "",
// "fontWeight": "",
// "fontSize": ["auto", "px"],
// "textAlign": "left",
// "width": ["auto", "px"],
// "height": ["auto", "px"],
// "margin": [0, "px"],
// "padding": [0, "px"],