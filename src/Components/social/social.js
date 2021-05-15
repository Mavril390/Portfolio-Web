import React from 'react'
import './social.css'

function Social(){
    return(
        <div>
            <div className="Social">
                <a href="https://www.linkedin.com/in/mauricio-marinkovich-1075b2176/"><i className="fab fa-linkedin-in Social__icon"></i></a>
            </div>
            <div className="Social">
                <a href="https://www.instagram.com/mavril3/?hl=es-la/"><i className="fab fa-instagram Social__icon"></i></a>
            </div>
            <div className="Social">
                <a href="https://github.com/Mavril390?tab=repositories/"><i className="fab fa-github Social__icon"></i></a>
            </div>
        </div>
    )
}

export default Social;