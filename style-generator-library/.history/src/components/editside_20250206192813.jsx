import { PenOff } from "lucide-react"
import { useState } from "react";
export default function EditSide({ element }) {

    const [color, setColor] = useState("#3498db"); // Default color

    function handleChange(e) {
        setColor(e.target.value);
    };
    return (
        <div className="col-span-4 py-4 pl-3 border-gray-300 border-l-2 bg-[#F5F5F5] mt-2 rounded-lg text-xl ">
            {
                element &&
                (<>
                    <div className="max-w-[360px]">
                        <label className="font-rubik text-2xl ">Tag :</label>
                        <div className="relative w-[100%]">
                            <PenOff className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={15} />
                            <input type="text" disabled value={element.tag} className="pl-10 pr-3 py-1 border-2 rounded-md text-base w-[90%] max-w-[360px] font-medium" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="font-rubik text-2xl  md:block">Class :</label>
                        <input type="text" value={element.class} onChange={() => { }} className="pl-3 pr-3 py-1 border-2 text-base font-medium rounded-md w-[90%] max-w-[360px] bg-white " />
                    </div>
                    <div className="w-[100%] ">
                        <label className="font-rubik text-2xl  md:block">Id :</label>
                        <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] max-w-[360px] text-black" />
                    </div>
                    <div className="w-[100%] ">
                        <label className="font-rubik text-2xl  md:block">Text Color:</label>
                        <input type="color" value={element.textColor} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] max-w-[360px] text-black" />
                    </div>
                    <div className="w-[100%]">
                        <label className="font-rubik text-2xl  md:block">Text Color:</label>
                        <div className="flex items-center justify-start gap-2">
                            <input
                                type="color"
                                value={color}
                                onChange={handleChange}
                                className="w-10 h-10 cursor-pointer border rounded-md"
                            />
                            <input
                                type="text"
                                value={color}
                                onChange={handleChange}
                                className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] max-w-[360px] text-black"
                            // maxLength={7}
                            />
                        </div>

                        {/* Color Preview Box */}
                        {/* <div
                            className="w-full h-20 mt-4 rounded-md shadow-inner border"
                            style={{ backgroundColor: color }}
                        ></div> */}
                    </div>
                </>
                )
            }
        </div >
    )
}


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