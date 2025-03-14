import { useEffect, useState } from "react";
import {isValidTitle, isValidRate} from '../utils.js'

function MovieForm({ addMovie, editingMovie, updateMovie }) {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");

  // add state that will control the validility of the title
  const [validTitle, setValidTitle] = useState(false);
  const [validRate, setValidRate] = useState(false);

  // we will use the useEffect hook to trigger an action when
  // editingMovie state changes
  useEffect(() => {
    if(editingMovie){
      setTitle(editingMovie.title);
      setRate(editingMovie.rate);
      setValidTitle(true);
      setValidRate(true);
    }
  }, [editingMovie]);


  // Requirements for inputs
  // title - not empty and more than 3 characters
  // rate - not empty string, it's not NaN isNaN()
  //        range of rate >=1 and <= 10 


  const handleTitleInput = (e) => {
    const value = e.target.value;
    setTitle(value);
    setValidTitle(isValidTitle(value));
  };

  const handleRateInput = (e) => {
    const value = e.target.value;
    setRate(value);
    setValidRate(isValidRate(value));
  };

  const isFormValid = validTitle && validRate;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      console.log('Invalid Inputs');
      return;
    }

    const movieData = {
      id: editingMovie ? editingMovie.id : Date.now(),
      title: title,
      rate: rate,
    };

    if(editingMovie) {
      console.log('Update triggered: ', movieData);
      updateMovie(movieData);
    } else {
      console.log("New Movie: ", movieData);
      addMovie(movieData);
    }
    

    
    // Reset State
    setTitle("");
    setRate("");

    // Reset the State of input validations
    setValidTitle(false);
    setValidRate(false);
  };

  

  return (
    <form
      onSubmit={handleSubmit}
      className="z-1 p-3 mt-5 border border-2 rounded-2 d-xl-flex gap-1 col-lg-4 col-md-6 
    col-col-11 neon-shadow"
    >
      <div className="col-xl-7 col-12 mb-1">
        <div className="form-floating">
          <input
            onChange={handleTitleInput}
            type="text"
            className={`form-control ${validTitle ? '': 'is-invalid'}`}
            id="movie-title"
            placeholder="Movie Title"
            value={title}
          />
          <label htmlFor="movie-title">Movie Title</label>
        </div>
      </div>
      <div className="col-xl-3 col-12 mb-1">
        <div className="form-floating">
          <input
            onChange={handleRateInput}
            type="number"
            className={`form-control ${validRate ? '': 'is-invalid'}`}
            id="movie-rate"
            placeholder="Movie Title"
            value={rate}
          />
          <label htmlFor="movie-rate">Rate(1-10)</label>
        </div>
      </div>
      <button
        id="submit-btn"
        type="submit"
        className="btn btn-warning btn-sm col-xl-2 col-12 mb-1"
        disabled={!isFormValid}
      >
        {editingMovie ? 'Update': 'Add'}
      </button>
    </form>
  );
}

export default MovieForm;
