import React from "react";
import styles from "./ImageGalleryItem.module.css"

const ImageGalleryItem = ({ normalImageURL, id, setCurrentImage }) => {
    return (
        <li className={styles.ImageGalleryItem}>
            <img className={styles.ImageGalleryItemImage} src={normalImageURL} alt={id} onClick={setCurrentImage}/>
        </li>
    );
}

export default ImageGalleryItem;