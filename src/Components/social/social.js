import React from 'react'
import './social.css'

function Social(){
    return(
        <div>
            <div className="Social">
                <i className="fab fa-linkedin-in Social__icon"></i>
            </div>
            <div className="Social">
                <i className="fab fa-instagram Social__icon"></i>
            </div>
            <div className="Social">
                <i className="fab fa-github Social__icon"></i>
            </div>
        </div>
    )
}

export default Social;