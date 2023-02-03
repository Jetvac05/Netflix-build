import React, { useEffect, useState } from "react";
import "./Search.css";
import Banner from "../Banner";
import Nav from "../Nav";
import { useLocation } from "react-router-dom";

function Search() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(location.state.searchTerm);
  const [results, setResults] = useState([]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5c569a3e64c4ab92a06aedbc7cc29fee&query=${searchTerm}`
    );
    const data = await response.json();
    setResults(data.results);
    setSearchTerm(location.state.searchTerm);
  };

  return (
    <div>
      <Nav />

      <Banner />
      <div className="search__title">Films related to ... {searchTerm}</div>
      <div className="search__poster">
        {results.map((result) => {
          if (!result.backdrop_path) {
            return null;
            
          }
          return (
            <div className="Results" key={result.id}><img className="results__img"
                src={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`}
                alt={result.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
