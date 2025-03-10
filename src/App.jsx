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
  
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center mt-2">
        <MovieForm />
      </div>
      <MovieList movies={movies}/>
    </>
  );
}

export default App;
