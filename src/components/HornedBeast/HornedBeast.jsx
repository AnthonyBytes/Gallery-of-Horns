import React from 'react';

function HornedBeast(props) {

  return (
    <>
    <h2>{props.title}</h2>
    <img src={props.imgSrc} alt={props.title} title={props.title} />
    <p>{props.description}</p>
    </>
  )

}

export default HornedBeast;