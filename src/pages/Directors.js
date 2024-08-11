import React,{ useEffect, useState } from "react";
import NavBar from "../components/NavBar";


function Directors() {
  const [directors, setDirectors] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/directors')
     .then(response => {
       if (!response.ok) {
         throw new Error('Network Response was not ok');
       }
       return response.json;
     })
     .then(data => setDirectors(data))
     .catch(error => setError(error.message));
  }, [])

  if (error) {
    return <div>Error: {error} </div>
  }
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {directors.length > 0 ? (
          directors.map(director => (
            <div key={director.name}>{director.name}
              <ul>
                {director.movies.map(movie => (
                  <li key={movie}>{movie}</li>
                ))}
                </ul>
            </div>
          ))
        ) : (
          <p>No directors available</p>
        )}
      </main>
    </>
  );
  
};

export default Directors;
