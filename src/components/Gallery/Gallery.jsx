import React from 'react';

import HornedBeast from '../HornedBeast/HornedBeast.jsx';

function Gallery(props) {
  return (
    <>
      {props.list.map((beast) => (
        <HornedBeast 
          key={beast._id} 
          beast={beast} />
      ))}
    </>
  );
}

export default Gallery;