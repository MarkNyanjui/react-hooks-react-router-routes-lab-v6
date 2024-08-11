import {Link} from 'react-router-dom';
import React from 'react';
import Movie from '../pages/Movie';
function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to = {`/movie/${Movie.id}`}>View Details</Link>
    </article>
  );
};

export default MovieCard;
