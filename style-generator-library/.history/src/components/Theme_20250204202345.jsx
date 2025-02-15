import { Edit, Trash2 } from "lucide-react";

export default function Theme(props) {
    return (
        <div className="col-span-12 md:col-span-6 bg-white shadow-lg p-6 rounded-lg">
            <ul>
                {
                    props.theme.map(styleElement => (
                        <li key={styleElement.id}
                            className="border p-2 rounded-xl flex justify-between  mb-2">
                            {styleElement.id} {styleElement.tag}
                            <Edit className="cursor-pointer justify-self-end flex-shrink" />
                            <Trash2 onClick={() => props.handleDelete(styleElement.id)} className="cursor-pointer" />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
