import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movie/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMovie(data))
      .catch(error => setError(error.message));
  }, [id]);

  if (error) {
    return <div>Error: {error} </div>
  }
  return movie ? (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </div>
  ) : (
    <p>No movie found</p>
  )
}

export default Movie;