// Home.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './Button.css';

const Home = () => {
    return (
        <div className="home-container" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/spin">
                <button className='button' style={{ marginBottom: '50px' }}>Spin for Shop</button>
            </Link>
            <Link to="/stores">
                <button className='button'>Choose Stall</button>
            </Link>
        </div>
    );
};

export default Home;
