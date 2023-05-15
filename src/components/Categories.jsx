import React from "react";
import Category from "./Category";
import { CATEGORIES } from "../data";

const Categories = ({ setCurrentCategory }) => {
  return (
    <aside>
      <ul className="categories">
        <button
          onClick={() => setCurrentCategory("all")}
          className="btn btn-all"
        >
          All
        </button>
        {CATEGORIES.map((category) => (
          <Category
            key={category.name}
            {...category}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Categories;
