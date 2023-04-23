import React from "react";

function CategoryFilter({categories}) {
  function handleCategorySearch () {
    console.log("selected"); 
    
  }
  return (
    <div className="categories">
        <form>
        <input key={category} className="category" type="text" />
        <button onClick={handleCategorySearch}>search</button>
        </form>
    </div>
  );
}

export default CategoryFilter;

