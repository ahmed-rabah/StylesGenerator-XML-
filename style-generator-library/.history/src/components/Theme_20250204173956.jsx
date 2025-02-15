import React from 'react'

export default function Theme(props) {
    return (
        <div className="col-span-12 md:col-span-6 bg-white shadow-lg p-6 rounded-lg">
            <ul>
                {
                    props.theme.map((styleElement, index) => (
                        <li key={index}>
                            {styleElement}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
