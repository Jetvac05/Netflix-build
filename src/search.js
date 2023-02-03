import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchFilter() {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate("/search", { state: { searchTerm } });
    }
  };

  return (
    <div class="nav_search">
      <img
        className="nav_img"
        src="search_icon.png"
        alt=""
        onClick={() => {
          document.querySelector("#nav_search").classList.toggle("active");
        }}
      />
   <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        id="nav_search"
        onKeyDown={handleKeyDown}
      />

    </div>
  );
}

export default SearchFilter;
