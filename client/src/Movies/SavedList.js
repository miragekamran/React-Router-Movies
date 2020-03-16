import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list" style={{backgroundColor:'#ced9eb'}}>
    <Link><h3>Saved Movies:</h3></Link>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <NavLink to={`/movies`}>
      <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
