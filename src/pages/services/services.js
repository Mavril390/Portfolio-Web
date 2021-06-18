import React from 'react'
import ServicesElement from '../../Components/services/servicesElement'
import './services.css'

function Services(){
    return(
        <section className="services container" id="services">
            <div className="services--title mb-3">
                <h2> 
                    <i className="fas fa-concierge-bell" style={{paddingRight: "20px"}}></i>¿Qué puedo ofrecer? 
                </h2>
            </div>
            <ServicesElement />
        </section>
    )
}

export default Services;