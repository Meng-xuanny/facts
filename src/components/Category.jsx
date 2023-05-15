import React from "react";

const Category = ({ name, setCurrentCategory }) => {
  return (
    <li className="category">
      <button
        onClick={() => setCurrentCategory(name)}
        className={`${name} btn btn-category`}
      >
        {name.toUpperCase()}
      </button>
    </li>
  );
};

export default Category;
