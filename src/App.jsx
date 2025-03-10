import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  
  const [movies, setMovies] = useState([]);
  
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
