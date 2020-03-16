import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  // console.log(props);
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    // console.log(props);
    // const id = 1;
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log(response, 'Response')
        })
        .catch(error => {
          console.error(error);
        });

  },[props]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // const { title, director, metascore, stars } = movie;
  return (
    <div>
      <div className="save-wrapper" style={{}}>
        <div className="movie-card" style={{background: '#cfe0e3', borderRadius: '10px'}}>
          <MovieCard movie={movie} />
          <div className="save-button" onClick={saveMovie}>Save</div>
        </div>
      </div>

      
    </div>
  );
}

export default Movie;
