import React from 'react'

function Header ({ home, title, styleName, tagline}) {
    return (
        <header className={`${styleName} ck-header`}>
            {home && <h1 className="ck-header-title">{title}</h1>}
            {!home && <p className="ck-header-title">{title}</p>}
            <p className="ck-header-tagline">{tagline}</p>
        </header>
    )
}

export default Header;