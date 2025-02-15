export default function EditSide({ element }) {
    return (
        <div>
            {
                element &&
                (<div >
                    <label>Element Tag :</label>
                    <input type="text" disabled value={element.tag} className="border p-1 rounded-lg bg-gray-300" />
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