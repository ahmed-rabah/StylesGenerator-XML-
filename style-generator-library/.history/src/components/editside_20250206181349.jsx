export default function EditSide({ element }) {
    return (
        <div className="col-span-4 py-4 pl-3 bg-[#181C14] text-[#ECDFCC] rounded-lg">
            {
                element &&
                (<div className="w-full flex items-center">
                    <label className="font-rubik">Element Tag :</label>
                    <input type="text" disabled value={element.tag} className="border p-1 rounded-lg text-center bg-gray-300 text-xl" />
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