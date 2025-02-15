import { PenOff } from "lucide-react"
import { useState } from "react";
import { cssFonts as options } from "./tags"
export default function EditSide({ element }) {

    const [color, setColor] = useState(""); // Default color
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );
    function handleChange(e) {
        setColor(e.target.value);
    };
    return (
        <div className="col-span-4 py-4 pl-3 border-gray-300 border-l-2 bg-[#F5F5F5] mt-2 rounded-lg text-xl">
            {
                element &&
                (<form>

                    <div className="mb-1">
                        <label className="font-rubik text-xl ">Tag :</label>
                        <div className="relative w-[100%]">
                            <PenOff className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={15} />
                            <input type="text" disabled value={element.tag} className="pl-10 pr-3 py-1 border-2 rounded-md text-base w-[90%] font-medium" />
                        </div>
                    </div>
                    <div className="w-full my-1">
                        <label className="font-rubik text-xl  md:block">Class :</label>
                        <input type="text" value={element.class} onChange={() => { }} className="pl-3 pr-3 py-1 border-2 text-base font-medium rounded-md w-[90%] bg-white " />
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Id :</label>
                        <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black" />
                    </div>
                    <div className="w-[90%] my-1">
                        <label className="font-rubik text-xl  md:block">Text Color:</label>
                        <div className="flex items-center justify-start gap-2 ">
                            <input
                                type="color"
                                value={element.textColor}
                                onChange={handleChange}
                                className="w-10 h-10 cursor-pointer border rounded-md"
                            />
                            <input
                                type="text"
                                value={element.textColor}
                                onChange={handleChange} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[100%] text-black"
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
                                onChange={handleChange}
                                className="w-10 h-10 cursor-pointer border rounded-md"
                            />
                            <input
                                type="text"
                                value={element.backgroundColor}
                                onChange={handleChange} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[100%] text-black"
                            // maxLength={7}
                            />
                        </div>
                    </div>
                    <div className="w-[90%] my-1">
                        <label className="font-rubik text-xl  md:block">Border Color:</label>
                        <div className="flex items-center justify-start gap-2 ">
                            <input
                                type="color"
                                value={color}
                                onChange={handleChange}
                                className="w-10 h-10 cursor-pointer border rounded-md"
                            />
                            <input
                                type="text"
                                value={color}
                                onChange={handleChange} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[100%] text-black"
                            // maxLength={7}
                            />
                        </div>

                        {/* Color Preview Box */}
                        {/* <div
                            className="w-full h-20 mt-4 rounded-md shadow-inner border"
                            style={{ backgroundColor: color }}
                        ></div> */}
                    </div>
                    <div className="relative w-[100%] my-1">
                        <label className="font-rubik text-xl  md:block">Font Family:</label>

                        {/* Input Field */}
                        <input
                            type="text"
                            placeholder="Select a font..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onFocus={() => setIsOpen(true)}
                            onBlur={() => setIsOpen(false)}
                            className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white  w-[90%] text-black"
                        />

                        {/* Dropdown List */}
                        {isOpen && (
                            <ul className="absolute z-10 pl-3 pr-1 py-1   text-base font-medium  w-[90%] text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map((option, index) => (
                                        <li
                                            key={index}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                            onClick={() => {
                                                setSelected(option);
                                                setSearch(option);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {option}
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-2 text-gray-500">No results found</li>
                                )}
                            </ul>
                        )}
                    </div>
                    <div className="w-[100%] my-1 ">
                        <label className="font-rubik text-xl  md:block">Font Style :</label>
                        <select className="pl-3 pr-1 py-1   text-base font-medium  w-[90%] text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                            {
                                ["normal", "italic", "oblique"].map((option, index) => (
                                    <option
                                        key={index}
                                        className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                        onClick={() => {
                                            setSelected(option);
                                            setSearch(option);
                                            setIsOpen(false);
                                        }}
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
                        <select className="pl-3 pr-1 py-1   text-base font-medium  w-[90%] text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                            {
                                ["normal", "bold", "lighter", "bolder", 100, 200, 300, 400, 500, 600, 700, 800, 900].map((option, index) => (
                                    <option
                                        key={index}
                                        className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                        onClick={() => {
                                            setSelected(option);
                                            setSearch(option);
                                            setIsOpen(false);
                                        }}
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

                            <input type="number" value={element.fontSize[0]} onChange={() => { }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                            onClick={() => {
                                                setSelected(option);
                                                setSearch(option);
                                                setIsOpen(false);
                                            }}
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
                        <select className="pl-3 pr-1 py-1   text-base font-medium  w-[90%] text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                            {
                                ["start", "end", "center", "justify"].map((option, index) => (
                                    <option
                                        key={index}
                                        className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                        onClick={() => {
                                            setSelected(option);
                                            setSearch(option);
                                            setIsOpen(false);
                                        }}
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

                            <input type="number" value={element.width[0]} onChange={() => { }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                            onClick={() => {
                                                setSelected(option);
                                                setSearch(option);
                                                setIsOpen(false);
                                            }}
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

                            <input type="number" value={element.height[0]} onChange={() => { }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                            onClick={() => {
                                                setSelected(option);
                                                setSearch(option);
                                                setIsOpen(false);
                                            }}
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

                            <input type="number" value={element.margin[0]} onChange={() => { }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                            onClick={() => {
                                                setSelected(option);
                                                setSearch(option);
                                                setIsOpen(false);
                                            }}
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

                            <input type="number" value={element.padding[0]} onChange={() => { }} className="col-span-4 pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white text-black" />
                            <select className="col-span-8 pl-3 pr-1 py-1   text-base font-medium   text-black bg-white border rounded-md shadow-md mt-1 max-h-40 overflow-auto">
                                {
                                    ["px", "em", "rem", "%", "vw", "vh", "pc", "in"].map((option, index) => (
                                        <option
                                            key={index}
                                            value={option}
                                            className={`p-2 cursor-pointer hover:bg-blue-100 ${selected === option ? "bg-blue-200" : ""}`}
                                            onClick={() => {
                                                setSelected(option);
                                                setSearch(option);
                                                setIsOpen(false);
                                            }}
                                        >
                                            {option}
                                        </option>
                                    )
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </form>
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