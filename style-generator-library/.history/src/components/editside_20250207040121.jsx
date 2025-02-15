import { PenOff } from "lucide-react"
import { useState } from "react";
import { cssFonts as options } from "./tags"
export default function EditSide({ element, EditFormHandler }) {
    const [reset, setReset] = useState("");
    return (
        <div className="col-span-4 py-4 pl-3 border-gray-300 border-2 bg-[#F5F5F5] mt-2 rounded-lg text-xl  max-h-[80vh] overflow-scroll hidden-scrollbar">
            {
                element &&
                (<>
                    <div className="hidden">
                        <label htmlFor="idEl">idEl :</label>
                        <input id="idEl" type="text" disabled value={element.idEl} />

                    </div>
                    <div className="mb-1">
                        <label htmlFor="tag" className="font-rubik text-xl ">Tag :</label>
                        <div className="relative w-[100%]">
                            <PenOff className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={15} />
                            <input id="tag" type="text" disabled value={element.tag} className="pl-10 pr-3 py-1 border-2 rounded-md text-base w-[90%] font-medium" />
                        </div>
                    </div>
                    <div className="w-full my-1">
                        <label htmlFor="class" className="font-rubik text-xl  md:block">Class :</label>
                        <input id="class" type="text" value={element.class} onChange={(e) => { EditFormHandler("class", e.target.value) }} className="pl-3 pr-3 py-1 border-2 text-base font-medium rounded-md w-[90%] bg-white " />
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label htmlFor="id" className="font-rubik text-xl  md:block">Id :</label>
                        <input id="id" type="text" value={element.id} onChange={(e) => { EditFormHandler("id", e.target.value) }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black" />
                    </div>
                    <div className="w-[90%] my-1">
                        <label htmlFor="textColor" className="font-rubik text-xl  md:block">Text Color:</label>
                        <div className="flex items-center justify-start gap-2 ">
                            <input
                                id="textColor"
                                type="color"
                                value={element.textColor}
                                onChange={(e) => { EditFormHandler("textColor", e.target.value) }}
                                className="w-10 h-10 cursor-pointer border rounded-md"
                            />
                            <input
                                type="text"
                                value={element.textColor}
                                onChange={(e) => { EditFormHandler("textColor", e.target.value) }}
                                className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[100%] text-black"
                            // maxLength={7}
                            />
                        </div>

                        {/* Color Preview Box */}
                        {/* <div
                            className="w-full h-20 mt-4 rounded-md shadow-inner border"
                            style={{ backgroundColor: color }}
                        ></div> */}
                    </div>
                    <div className="w-[90%] my-1">
                        <label className="font-rubik text-xl  md:block">Background Color:</label>
                        <div className="flex items-center justify-start gap-2 ">
                            <input
                                type="color"
                                value={element.backgroundColor}

                                onChange={(e) => { EditFormHandler("backgroundColor", e.target.value) }}
                                className="w-10 h-10 cursor-pointer border rounded-md"
                            />
                            <input
                                type="text"
                                value={element.backgroundColor}
                                onChange={(e) => { EditFormHandler("backgroundColor", e.target.value) }}
                                className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[100%] text-black"
                            // maxLength={7}
                            />
                        </div>
                    </div>
                    <div className="w-[90%] my-1">
                        <label className="font-rubik text-xl  md:block">Border Color:</label>
                        <div className="flex items-center justify-start gap-2 ">
                            <input
                                type="color"
                                value={element.borderColor}
                                onChange={(e) => { EditFormHandler("borderColor", e.target.value) }}

                                className="w-10 h-10 cursor-pointer border rounded-md"
                            />
                            <input
                                type="text"
                                value={element.borderColor}
                                onChange={(e) => { EditFormHandler("borderColor", e.target.value) }}  // maxLength={7}
                            />
                        </div>

                        {/* Color Preview Box */}
                        {/* <div
                            className="w-full h-20 mt-4 rounded-md shadow-inner border"
                            style={{ backgroundColor: color }}
                        ></div> */}
                    </div>

                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Font Family :</label>
                        <select value={element.fontFamily} onChange={(e) => { EditFormHandler("fontFamily", e.target.value); }} className="pl-3 pr-1 py-1   text-base font-medium  w-[90%] text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                            {
                                options.map((option, index) => (
                                    <option
                                        key={index}
                                        className={`p-2 cursor-pointer hover:bg-blue-100 `}
                                    >
                                        {option}
                                    </option>
                                )
                                )
                            }
                        </select>
                        {/* <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black" /> */}
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Font Style :</label>
                        <select value={element.fontStyle} onChange={(e) => { EditFormHandler("fontStyle", e.target.value); }} className="pl-3 pr-1 py-1   text-base font-medium  w-[90%] text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                            {
                                ["normal", "italic", "oblique"].map((option, index) => (
                                    <option
                                        key={index}
                                        className={`p-2 cursor-pointer hover:bg-blue-100`}
                                    >
                                        {option}
                                    </option>
                                )
                                )
                            }
                        </select>
                        {/* <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black" /> */}
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Font Weight :</label>
                        <select value={element.fontWeight} onChange={(e) => { EditFormHandler("fontWeight", e.target.value); }} className="pl-3 pr-1 py-1  text-base font-medium  w-[90%] text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                            {
                                ["normal", "bold", "lighter", "bolder", 100, 200, 300, 400, 500, 600, 700, 800, 900].map((option, index) => (
                                    <option
                                        key={index}
                                        className={`p-2 cursor-pointer hover:bg-blue-100`}
                                    >
                                        {option}
                                    </option>
                                )
                                )
                            }
                        </select>
                        {/* <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black" /> */}
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Font Size :</label>
                        <div className="grid-cols-12 gap-2">

                            <input type="number" value={element.fontSize[0]} onChange={(e) => { EditFormHandler("fontSize", e.target.value, true); }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select value={element.fontSize[1]} onChange={(e) => { EditFormHandler("fontSize", e.target.value, true, 1); }} className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 `}
                                        >
                                            {option}
                                        </option>
                                    )
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Text Align :</label>
                        <select value={element.textAlign} onChange={(e) => { EditFormHandler("textAlign", e.target.value); }} className="pl-3 pr-1 py-1   text-base font-medium  w-[90%] text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                            {
                                ["start", "end", "center", "justify"].map((option, index) => (
                                    <option
                                        key={index}
                                        className={`p-2 cursor-pointer hover:bg-blue-100 `}

                                    >
                                        {option}
                                    </option>
                                )
                                )
                            }
                        </select>
                        {/* <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black" /> */}
                    </div>
                    {/* width */}
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Width :</label>
                        <div className="grid-cols-12 gap-2">

                            <input type="number" value={element.width[0]} onChange={(e) => { EditFormHandler("width", e.target.value, true); }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select value={element.width[1]} onChange={(e) => { EditFormHandler("width", e.target.value, true, 1); }} className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 `}
                                        >
                                            {option}
                                        </option>
                                    )
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    {/* height */}
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Height :</label>
                        <div className="grid-cols-12 gap-2">

                            <input type="number" value={element.height[0]} onChange={(e) => { EditFormHandler("height", e.target.value, true); }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select value={element.height[1]} onChange={(e) => { EditFormHandler("fontSize", e.target.value, true, 1); }} className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100`}
                                        >
                                            {option}
                                        </option>
                                    )
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Margin :</label>
                        <div className="grid-cols-12 gap-2">

                            <input type="number" value={element.margin[0]} onChange={(e) => { EditFormHandler("margin", e.target.value, true); }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select value={element.margin[1]} onChange={(e) => { EditFormHandler("fontSize", e.target.value, true, 1); }} className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 `}
                                        >
                                            {option}
                                        </option>
                                    )
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">padding :</label>
                        <div className="grid-cols-12 gap-2">

                            <input type="number" value={element.padding[0]} onChange={(e) => { EditFormHandler("padding", e.target.value, true); }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select value={element.padding[1]} onChange={(e) => { EditFormHandler("padding", e.target.value, true, 1); }} className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 `}
                                        >
                                            {option}
                                        </option>
                                    )
                                    )
                                }
                            </select>
                        </div>
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