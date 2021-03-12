import React from "react";
import s from "./imageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, openModal }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={s.ImageGalleryItemImage}
        data-largeimg={largeImageURL}
        onClick={openModal}
      />
    </li>
  );
};

export default ImageGalleryItem;
