import React,{ useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
     .then(response => {
       if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
       }
       return response.json(); // parses the response to JSON, returns a Promise that resolves to the parsed JSON object.  If the response was unsuccessful, rejects with an Error object.  This is a convenient way to handle errors in fetch() and other Promise-based APIs.  The response is automatically closed after parsing.  If you want to handle the response manually, you can use response.text() or response.blob() instead.  For example, response.text().then(text => console.log(text)).catch(error => console.error('Error:', error));  If you want to read the response as a Blob, use response.blob().then(blob => console.log(blob)).catch(error => console.error('Error:', error));  If you want to read the response as a TextStream, use response.
     })
     .then(data => setMovies(data))
     .catch(error => console.error('Error:', error));
  }, [])
  return (
    <>
      <header>
      <NavBar />
      </header>
      <main>
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.id} title={movie.title} />
          ))
        ) : (
          <p>No movies available</p>
        )}
      </main>
    </>
  );
};

export default Home;
