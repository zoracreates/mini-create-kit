import React from 'react'

function Description ({title, children }) {
    return (
        <div className="example">
            <h2 className="example--title">{title}</h2>
            <h3>Pattern Description</h3>
            {children}
        </div>
    )
}

export default Description;