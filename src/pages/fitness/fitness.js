import React from 'react'
import FitnessElement from '../../Components/fitness/fitnessElement'
import './fitness.css'

function Fitness(){
    return(
        <section className="fitness container" id="fitness">
            <div className="fitness--title mb-3">
                <h2> 
                    <i className="fas fa-list-alt" style={{paddingRight: "20px"}}></i>Mis Aptitudes
                </h2>
            </div>
            <FitnessElement />
        </section>
    )
}

export default Fitness;