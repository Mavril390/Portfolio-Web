import React from 'react'
import FitnessElement from '../../Components/fitness/fitnessElement'

function Fitness(){
    return(
        <section className="fitness container" id="fitness">
            <div className="intro mt-5 mb-3">
                <h2 style={{color: "white"}}> 📝 Mis Aptitudes</h2>
            </div>
            <FitnessElement />
        </section>
    )
}

export default Fitness;