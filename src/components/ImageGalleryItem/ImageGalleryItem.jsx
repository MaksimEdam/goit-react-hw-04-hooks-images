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

/* export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={s.ImageGalleryItemImage}
          src={this.props.webformatURL}
          alt={this.props.tags}
        />
        {this.state.showModal && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            toggleModal={this.toggleModal}
            alt={this.props.tags}
          />
        )}
      </li>
    );
  }
}
 */
