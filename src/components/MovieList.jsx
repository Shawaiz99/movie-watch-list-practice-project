import { useState } from "react";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState([
    {
      id: 1001,
      title: "Inception",
      rate: 8.7,
    },
    {
      id: 1002,
      title: "Rush Hour",
      rate: 7.7,
    },
    {
      id: 1003,
      title: "Lord of the Rings: Fellowship of the Ring",
      rate: 9.0,
    }
  ]);

  return (
    <div className="d-flex flex-column gap-3 align-items-center mt-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

export default MovieList;
