export default function EditSide({ elementId, element }) {
    if (elementId == null) {
        return
    }
    return (

        <div>
            <div>
                <label>Element Tag :</label>
                <input type="text" value={element.tag} />
            </div>
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