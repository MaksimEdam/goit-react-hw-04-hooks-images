import { toast } from "react-toastify";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import s from "./Searchbar.module.css";

function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState("");

  const handleNameChange = (e) => {
    setImageName(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageName.trim() === "") {
      toast("Type in the keyword");
      return;
    }
    onSubmit(imageName);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <ImSearch style={{ marginRight: 8 }} />
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          type="text"
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;
