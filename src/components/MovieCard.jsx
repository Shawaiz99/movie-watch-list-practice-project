import { FaTrashCan } from "react-icons/fa6"

function MovieCard() {
  return (
    <div className="col-6 m-5">
      <div className="card bg-bone-white text-dark">
        <div className="card-body d-flex justify-content-between">
            <h3 className="card-title m-0">
                Card
            </h3>
            <div className="text-danger">
              <FaTrashCan/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard