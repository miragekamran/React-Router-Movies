import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path='/movie/:id' render={props => <MovieList {...props} movies={Movie} /> } />
        {/* <Route path='/movie/:id' component={Movie}/> */}
      </div>
    </div>
  );
};

export default App;
