import { FaTrashCan } from "react-icons/fa6";

function MovieCard({movie}) {
  return (
    <div className="col-6">
      <div className="card bg-bone-white text-dark position-relative">
        <span
          className="position-absolute top-0 start-0 translate-middle badge bg-success
        custom-badge-position"
        >
          {movie.rate}
        </span>

        <div className="card-body d-flex justify-content-between">
          <h3 className="card-title m-0">{movie.title}</h3>
          <div className="text-danger">
            <FaTrashCan />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
