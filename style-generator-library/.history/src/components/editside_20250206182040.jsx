import { PenOff } from "lucide-react"
export default function EditSide({ element }) {
    return (
        <div className="col-span-4 py-4 pl-3 border-gray-300 border-l-2 rounded-lg">
            {
                element &&
                (<div className="w-full flex items-center">
                    <label className="font-rubik text-2xl">Element Tag :</label>
                    <div className="relative">
                        <input type="text" disabled value={element.tag} className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <PenOff absolute left-3 top-1 /2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                </div>
                )
            }
        </div>
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