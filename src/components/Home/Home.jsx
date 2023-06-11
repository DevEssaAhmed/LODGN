import React from 'react';
import './Home.css';
import Info from './Info';
import CardList from '../CardList/CardList';

const Home = () => {
  return (
    <div className='home'>
      <h1 className='req'>You currently have 3 requests</h1>

      <div className='upper-container'>
        <Info />
        <div className='progress-container'>
          <div className='column column-left'>
            <p>RECEIVED</p>
          </div>
          <div className='column column-middle'>
            <p>NEGOTIATING</p>
          </div>
          <div className='column column-right'>
            <p>COMPLETED</p>
          </div>
        </div>
      </div>

      <div className='lower-container'>
        <Info />
        <div className='completed-bar'>
          <p>COMPLETED</p>
        </div>
        <CardList />
      </div>
    </div>
  );
};

export default Home;
