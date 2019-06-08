import React from 'react'

const ImageCard = ({ imgSrc, imgAlt, vertical, children }) => {
    return (
    <div className={vertical ? `ck-vertical-card ck-img-card`: `ck-img-card`}>
        <img className="ck-img" src={imgSrc} alt={imgAlt} />
        {children && <div> {children} </div>}
    </div>);
}

export default ImageCard;