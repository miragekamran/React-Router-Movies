import React from 'react';
import {Link} from 'react-router-dom';
import SavedList from './SavedList';
import addToSavedList from './SavedList'

const MovieCard = ({movie}) => {
  const { title, director, metascore, stars } = movie;

  
  return (
    <div className="save-wrapper" style={{}}>
      <div className="movie-card" style={{background: '#48afc2', borderRadius: '5px', width: '20rem'}}>
      <img style={{borderRadius: '3px', width: '20%'}}
        className="home-image"
        src='https://i3.wp.com/www.digitbin.com/content/uploads/Sites-to-Watch-Movies-Online-600x400.jpg'
        alt=""
      />
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCard;
