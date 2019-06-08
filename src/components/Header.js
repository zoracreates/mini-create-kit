import React from 'react'

function Header ({ home, title, styleName, tagline}) {
    return (
        <header className={styleName}>
            {home && <h1>{title}</h1>}
            {!home && <p>{title}</p>}
            <p>{tagline}</p>
        </header>
    )
}

export default Header;