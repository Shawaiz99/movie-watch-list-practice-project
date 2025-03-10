import MovieCard from "./MovieCard";

function MovieList({movies}) {

  return (
    <div className="d-flex flex-column gap-3 align-items-center mt-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

export default MovieList;
