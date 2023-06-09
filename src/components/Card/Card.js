import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card({
  name,
  image,
  language,
  genres,
  rating,
  summary,
  site,
  searchQuery,
}) {
  const navigate = useNavigate();

  const openDescription = () => {
    navigate("/description", {
      state: {
        name: name,
        image: image,
        language: language,
        genres: genres,
        rating: rating,
        summary: summary,
        site: site,
        searchQuery: searchQuery,
      },
    });
  };
  return (
    <div id="movie-card" onClick={() => openDescription()}>
      <div id="image">
        <img src={image !== null ? image.medium : undefined} alt="" />
      </div>
      <div id="description">
        <div id="header">{name}</div>
        <div id="language">{language}</div>
        <div id="genre">{genres.map((genre) => `${genre} `)}</div>
        <div id="rating">{rating}</div>
      </div>
    </div>
  );
}
