// Home.js

import React, { useState } from 'react';
import './Home.css'; // Add this line if you want to style the button

const Home = () => {
    const elementsArray = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];
    const [selectedElement, setSelectedElement] = useState(null);

    const handleButtonClick = () => {
        const randomIndex = Math.floor(Math.random() * elementsArray.length);
        const randomElement = elementsArray[randomIndex];
        setSelectedElement(randomElement);
    };

    return (
        <div className="home-container">
            <button className="big-button" onClick={handleButtonClick}>
                Click Me!
            </button>
            {selectedElement && <p>Selected Element: {selectedElement}</p>}
        </div>
    );
};

export default Home;
