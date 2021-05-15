import React from 'react'
import ServicesElement from '../../Components/services/servicesElement'
import './services.css'

function Services(){
    return(
        <section className="services container" id="services">
            <div className="intro mt-5 mb-3">
                <h2> ❓ ¿Qué puedo ofrecer? </h2>
            </div>
            <ServicesElement />
        </section>
    )
}

export default Services;