import MovieCard from "./MovieCard";

function MovieList({movies, removeMovie}) {

  return (
    <div className="d-flex flex-column gap-3 align-items-center mt-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} removeMovie={removeMovie}/>
      ))}
    </div>
  );
}

export default MovieList;
