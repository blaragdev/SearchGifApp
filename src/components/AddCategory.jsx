import { useState } from "react";

export const AddCategory = ({ addCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 1) {
      //setCategories((categories) => [...categories, inputValue]);
      addCategory(inputValue.toUpperCase());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Buscar Gif"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};
