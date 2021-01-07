import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className='pa2'>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name.split(' ').slice(0,2).join(' ')}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;
