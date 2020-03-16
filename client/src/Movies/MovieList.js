import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = props => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          // console.log(response.data, 'movies');
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => (
        
          <MovieDetails key={movie.id} movie={movie} />
        
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  return (
    <div>
      <Link to={`/movies/${movie.id}`}>
        <MovieCard movie={movie} />
      </Link>
    </div>
  );
}

export default MovieList;
