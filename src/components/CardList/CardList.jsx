import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = () => {
  return (
    <div className='card-list'>
      <Card rareFind={true} />
      <Card />
      <Card />
    </div>
  );
};

export default CardList;
