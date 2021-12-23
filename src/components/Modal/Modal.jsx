import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";
const modalRoot = document.querySelector("#modal-root");

function Modal({ toggleModal, largeImageURL, tags }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };

  const handleBackdropClick = (e) => {
    const isClickedOnBackdrop = e.currentTarget === e.target;
    if (isClickedOnBackdrop) {
      toggleModal();
    }
  };
  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
