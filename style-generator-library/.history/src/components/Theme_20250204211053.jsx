import { Edit, Trash2 } from "lucide-react";
export default function Theme(props) {
    return (
        <div className="col-span-12 md:col-span-6 bg-white shadow-lg p-6 rounded-lg">
            <ul>
                {
                    props.theme.map(elem => (
                        <ThemeElement elem={elem} handleDelete={props.handleDelete}
                    ))
                }
            </ul>
        </div>
    )
}

function ThemeElement({ elem, handleDelete }) {

    let title = names[elem.tag]
    return (
        <li key={elem.id}
            className="border p-2 rounded-xl flex justify-between items-center mb-2">
            <p className="font-bold text-2xl">
                {elem.tag}
            </p>
            <div className="flex justify-end items-center">
                <Edit className="cursor-pointer text-blue-600" strokeWidth={1.5} size={28} />
                <Trash2 onClick={() => handleDelete(elem.id)} className="cursor-pointer text-red-600" strokeWidth={1.5} size={28} />
            </div>
        </li>
    )
}
