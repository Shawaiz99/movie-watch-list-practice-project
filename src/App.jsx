import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import { useState } from "react";
import ThemeToggler from "./components/ThemeToggler";

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
    console.log("Captured Edit Movie", movieToEdit);
    setEditingMovie(movieToEdit);
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) => 
      prev.map((movie) => (movie.id === updatedMovie.id ?
      updatedMovie : movie))
    );
    // todo - set the editingMovie to null
    setEditingMovie(null);
  };

  return (
    <>
      <Navbar>
        <ThemeToggler/>
      </Navbar>
      <div className="d-flex justify-content-center mt-2">
        <MovieForm
          addMovie={addMovie}
          editingMovie={editingMovie}
          updateMovie={updateMovie}
        />
      </div>
      <MovieList
        movies={movies}
        editMovie={editMovie}
        removeMovie={removeMovie}
      />
    </>
  );
}

export default App;
