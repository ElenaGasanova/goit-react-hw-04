import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit, savedSearchValue }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const searchValue = event.target.elements.search.value;
    savedSearchValue.current = searchValue;

    if (!searchValue.trim()) {
      toast.error("This input field cannot be empty.");
      return;
    }

    onSubmit(searchValue);

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
