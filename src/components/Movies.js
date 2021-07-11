import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { movies.map(({ title, time, genres }) => {
          return (
            <div>
              <h1>Name: {title}</h1>
              <p>Time: {time}</p>
              <ul>
                { genres.map(genre => <li>{genre}</li> ) }
              </ul>
            </div>
          )
        }) }
    </div>
  );
};

export default Movies;
