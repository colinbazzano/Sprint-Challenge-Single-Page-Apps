import React from "react";

const CharacterCard = props => {
  return (
    <div className='charCard' key={props.index}>
      <h3>Name: {props.name}</h3>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
    </div>

  );
}

export default CharacterCard;
