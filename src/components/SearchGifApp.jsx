import { useState } from "react";
import { GifGrid, AddCategory } from "./";

export const SearchGifApp = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <h1>Search Gif App</h1>

        <AddCategory addCategory={addCategory} />

        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </div>
    </div>
  );
};
