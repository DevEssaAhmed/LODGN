import React from 'react';
import './Card.css';
import cardSvg from '../../assets/card.svg';

const Card = ({rareFind}) => {
  return (
    <div className='card'>
        {rareFind && <span className='rare-find'>Rare find</span>}
      <div>
        <img src={cardSvg} alt='' />
      </div>
      <div className='card-lower'>
        <p>1.5 miles away from joblocation.</p>
        <div className='card-price'>
          <div>
            <p>Singles: $120</p>
            <p>Doubles: $145</p>
          </div>
          <button className='btn'>Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
