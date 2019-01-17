import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map ((actor) => (
      <div>
        <h2>Name: {actor.name}</h2>
        <p>Movies: </p>
        <ul>
          {actor.movies.map ((movie) => (
            <li>{movie}</li>
          ))}
        </ul>
        </div>
       ))}
    </div>
  );
};

export default Actors;

// <div>
//       {/*{code here}*/}
//       <h1>Directors Page</h1>
//       {directors.map((director, index) => (
//         <div key={index}>
//           <h3>{director.name}</h3>
//           <p>Movies: </p>
//             <ul>
//               {director.movies.map((movie, index) => (
//                 <li key={index}>{movie}</li>
//               ))}
//             </ul>
//         </div>
//       ))}
//     </div>
