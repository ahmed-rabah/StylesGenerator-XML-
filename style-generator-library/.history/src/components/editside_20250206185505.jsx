import { PenOff } from "lucide-react"
export default function EditSide({ element }) {
    return (
        <div className="col-span-4 py-4 pl-3 border-gray-300 border-l-2 bg-[#F5F5F5] mt-2 rounded-lg text-xl">
            {
                element &&
                (<>
                    <div className="">
                        <label className="font-rubik text-2xl ">Tag :</label>
                        <div className="relative w-[100%]">
                            <PenOff className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={15} />
                            <input type="text" disabled value={element.tag} className="pl-10 pr-3 py-1 border-2 rounded-md text-base font-medium" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="font-rubik text-2xl  md:block">Class :</label>
                        <input type="text" value={element.class} onChange={() => { }} className="pl-3 pr-3 py-1 border-2 text-base font-medium rounded-md bg-white " />
                    </div>
                    <div className="w-[100%] ">
                        <label className="font-rubik text-2xl  md:block">id :</label>
                        <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 text-base font-medium rounded-md bg-white md:block w-[90%] text-black" />
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