import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

import styles from "./ImageGallery.module.css"

const ImageGallery = ({ images, imageClick }) => {
  return <ul className={styles.ImageGallery}>
      {images.map((image) => {
          return (
            <ImageGalleryItem key={image.id} normalImageURL={image.webformatURL} id={image.id} setCurrentImage={() => imageClick(image)}/>
          )
      })}
  </ul>;
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  imageClick: PropTypes.func.isRequired
}

export default ImageGallery;
