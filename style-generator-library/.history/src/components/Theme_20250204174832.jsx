import React from 'react'

export default function Theme(props) {
    return (
        <div className="col-span-12 md:col-span-6 bg-white shadow-lg p-6 rounded-lg">
            <ul>
                {
                    props.theme.map(styleElement => (
                        <li key={styleElement.id}>
                            {styleElement.tag}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
