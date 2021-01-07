import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='grow bg-washed-yellow br3 pa3 ma2 dib bw2 shadow-5'>
      <img className='grow ba b--green bw1 br-100 pa2 mh4'
      alt='robots' src={`https://robohash.org/set=set5/${id}?size=100x100`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
