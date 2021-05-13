import React from 'react';
import './wave.css'

function Wave(){
    return(
        <div className="wave">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="wave__radio">
                <path className="wave__radio-color" d="M-9.87,50.81 C119.92,210.69 271.49,-49.98 508.74,91.28 L500.00,0.00 L0.00,0.00 Z">
                </path>
            </svg>
        </div>
    )
}

export default Wave;