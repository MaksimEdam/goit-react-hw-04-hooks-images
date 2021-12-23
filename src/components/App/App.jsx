import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ImageGallery from "../ImageGallery";
import Searchbar from "../Searchbar";
import Button from "../Button";
import Spinner from "../Spinner";
import imagesApi from "../../services/imagesApi";
import s from "./App.module.css";

function App() {
  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!imageName || !page) {
      return;
    }
    const fetchImages = async () => {
      try {
        const result = await imagesApi(imageName, page);
        setItems((prevItems) => [...prevItems, ...result.hits]);
        if (result.length === 0) {
          toast.error("фото отсутствует");
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [imageName, page]);

  const handleFormSubmit = (imageName) => {
    setImageName(imageName);
    setItems([]);
    setPage(1);
    setLoading(true);
  };
  const onBtnClick = () => {
    setLoading(true);
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div className={s.App}>
      {loading && <Spinner />}
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery items={items} />
      {items.length > 0 && <Button onBtnClick={onBtnClick} />}
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
