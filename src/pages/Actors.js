import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
     .then(response => {
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       return response;
     })
     .then(data => setActors(data))
     .catch(error => console.error('Error:', error));
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {actors.length > 0 ? (
          actors.map(actor => (
            <div key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map(movie => (
                  <li key={movie}>{movie}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No actors available</p>
        )}
      </main>
    </>
  );
};

export default Actors;
