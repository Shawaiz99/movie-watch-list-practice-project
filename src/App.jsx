import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  // set up the state to edit the movie
  const [editingMovie, setEditingMovie] = useState(null);

  const addMovie = (newMovie) => {
    // movies.push(newMovie);
    console.log("Adding the new movie");
    setMovies((prev) => [...prev, newMovie]);
  };

  const removeMovie = (id) => {
    // const filteredArray = movies.filter((movie) => {movie.id !== id});
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
  };

  const editMovie = (movieToEdit) => {
    setEditingMovie(movieToEdit);
  };

  const updateMovie = () => {
    setMovies((prev) =>
      prev.map((movie) => (movie.id === updateMovie.id ? updateMovie : movie))
    );
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center mt-2">
        <MovieForm addMovie={addMovie} />
      </div>
      <MovieList movies={movies} removeMovie={removeMovie} />
    </>
  );
}

export default App;
