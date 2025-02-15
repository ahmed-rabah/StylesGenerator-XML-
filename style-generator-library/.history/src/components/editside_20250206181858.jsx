import { PenOff } from "lucide-react"
export default function EditSide({ element }) {
    return (
        <div className="col-span-4 py-4 pl-3 border-gray-700 rounded-lg">
            {
                element &&
                (<div className="w-full flex items-center">
                    <label className="font-rubik text-2xl">Element Tag :</label>
                    <div>
                        <input type="text" disabled value={element.tag} className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <PenOff />
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