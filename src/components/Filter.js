import React from "react";

function Filter({ selectedCategory, onCategoryChange, searchText, onSearchChange }) {
  return (
    <div className="Filter">
      <select 
        name="filter" 
        onChange={onCategoryChange} 
        value={selectedCategory}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={searchText} 
        onChange={onSearchChange} 
      />
    </div>
  );
}

export default Filter;
