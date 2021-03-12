import React, { Component } from "react";
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "../modal/Modal";
import s from "./imageGallery.module.css";

export default class ImageGallery extends Component {
  state = {
    largeImg: null,
  };

  openModal = (e) => {
    this.setState({ largeImg: e.target.dataset.largeimg });
  };

  closeModal = (e) => {
    this.setState({ largeImg: null });
  };

  render() {
    const { images } = this.props;
    const { largeImg } = this.state;
    const { openModal, closeModal } = this;

    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              tags={tags}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              openModal={openModal}
            />
          ))}
        </ul>
        {largeImg && <Modal largeImg={largeImg} closeModal={closeModal} />}
      </>
    );
  }
}
