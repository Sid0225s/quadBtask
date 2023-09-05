import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Card from "../Card/Card";

export default function Homepage({ searchQuery }) {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchShows = () => {
    if (search.length > 0) {
      const apiUrl = `https://api.tvmaze.com/search/shows?q=${search}`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((result) => {
          setShows(result);
        });
    }
  };

  useEffect(() => {
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((result) => {
        setShows(result);
      });
  }, [searchQuery]);

  return (
    <div id="homepage">
      <div id="searchbar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => changeSearch(e)}
          value={search}
        />
        <button onClick={() => searchShows()}>Search</button>
      </div>
      <div id="cards">
        {shows.length > 0 &&
          shows.map((show) => (
            <Card
              key={show.show.id}
              name={show.show.name}
              language={show.show.language}
              image={show.show.image}
              genres={show.show.genres}
              rating={show.show.rating.average}
              summary={show.show.summary}
              site={show.show.officialSite}
              searchQuery={searchQuery}
            />
          ))}
      </div>
    </div>
  );
}
