import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

const App = (props) => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  // console.log(props)
  return (
    <div>
      <SavedList list={savedList} />
        <Route
          exact path='/'
          component={MovieList}
        />
        <Route
          path='/movies/:movieId'
          render={props => {
            return (
              <Movie
                {...props}
                addToSavedList={addToSavedList}
              />
            )
          }} />
    </div>
  );
};

export default App;
