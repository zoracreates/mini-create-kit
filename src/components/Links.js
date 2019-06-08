import React from 'react'

export const Link = ({ linkText, linkAddress, title, blockDisplay }) => {
    return (
        <a href={linkAddress} title={title} className={blockDisplay ? `ck-link ck-block-link` : `ck-link`}>
            {linkText}
        </a>
    )

}

export const EmailLink = ({ emailAddress, linkText, title, blockDisplay }) => {
    return (
            <a href={`mailto:${emailAddress}`} title={title} className={blockDisplay ? `ck-link ck-block-link` : `ck-link`}>
                {linkText} <span className="ck-email-icon" aria-hidden></span>
            </a>
    )
}