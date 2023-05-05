import React, { useState } from "react";

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(["Kurkure", "Lays Chips", "Chocolate", "Softdrinks"]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterItems(event.target.value);
  };

  const filterItems = (query) => {
    const filteredResults = ["Kurkure", "Lays Chips", "Chocolate", "Softdrinks"].filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filteredResults);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search" />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}



