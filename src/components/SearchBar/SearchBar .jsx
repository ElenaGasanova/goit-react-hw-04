import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit, fetchGallery }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const searchValue = event.target.elements.search.value;

    if (!searchValue.trim()) {
      toast.error("This input field cannot be empty.");
      return;
    }

    fetchGallery(searchValue);

    form.reset();
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
};

export default SearchBar;
