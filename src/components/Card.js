import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa4 ma2 dib bw2 shadow-5'>
      <img className='grow ba b--green bw1 br-100 pa2'
      alt='robots' src={`https://robohash.org/${id}?size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
