import React from 'react';
import './GamerButton.css'; // Import the CSS file

const GamerButton = ({ onClick }) => {
    return (
        <button className="gamer-button" onClick={onClick}>
            <i className="fas fa-power-off"></i>
        </button>
    );
};

export default GamerButton;