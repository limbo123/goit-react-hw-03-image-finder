import React from "react";
import "../../style.css"

const ImageGalleryItem = ({ normalImageURL, id, setCurrentImage }) => {
    return (
        <li className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={normalImageURL} alt={id} onClick={setCurrentImage}/>
        </li>
    );
}

export default ImageGalleryItem;