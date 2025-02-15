import { PenOff } from "lucide-react"
export default function EditSide({ element }) {
    return (
        <div className="col-span-4 py-4 pl-3 border-gray-300 border-l-2 bg-[#F5F5F5] mt-2 rounded-lg text-xl">
            {
                element &&
                (<>
                    <div className="w-full flex items-center justify-start gap-x-2 ">
                        <label className="font-rubik ">Tag :</label>
                        <div className="relative w-min">
                            <PenOff className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input type="text" disabled value={element.tag} className="pl-10 pr-3 py-2 border-2 rounded-md w-6" />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-start gap-x-2">
                        <label className="font-rubik ">Class :</label>
                        <input type="text" value={element.class} onChange={() => { }} className="pl-3 pr-3 py-2 border-2 rounded-md bg-white " />
                    </div>
                    <div className="w-full flex items-center justify-start gap-x-2">
                        <label className="font-rubik ">id :</label>
                        <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 rounded-md bg-white text-black" />
                    </div>
                    <div className="w-full flex items-center justify-start gap-x-2">
                        <label className="font-rubik ">id :</label>
                        <input type="text" value={element.id} onChange={() => { }} className="pl-3 pr-1 py-1  border-2 rounded-md bg-white text-black" />
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