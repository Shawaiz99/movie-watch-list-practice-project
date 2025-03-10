import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  
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
  
  const addMovie = (newMovie) => {
    // movies.push(newMovie);
    console.log('Adding the new movie');
    setMovies((prev) => [...prev, newMovie]);
  };

  const removeMovie = (id) => {
    // const filteredArray = movies.filter((movie) => {movie.id !== id});
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center mt-2">
        <MovieForm addMovie={addMovie}/>
      </div>
      <MovieList movies={movies} removeMovie={removeMovie}/>
    </>
  );
}

export default App;
