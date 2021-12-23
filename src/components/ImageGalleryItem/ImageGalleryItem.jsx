import { useState } from "react";
import Modal from "../Modal";
import s from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, largeImageURL, tags }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <li className={s.ImageGalleryItem}>
      <img
        onClick={toggleModal}
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          toggleModal={toggleModal}
          alt={tags}
        />
      )}
    </li>
  );
}

export default ImageGalleryItem;
