import React from 'react'
import ServicesElement from '../../Components/services/servicesElement'

function Services(){
    return(
        <section className="services container" id="services">
            <div className="intro mt-5 mb-3">
                <h2> ❓ ¿Qué puedo ofrecer? </h2>
            </div>
            <div className="intro__text">
                <p>
                    Estoy seguro que gracias a mis conocimientos,
                     podré aportar valor a la empresa. Me preocupo 
                     siempre por aprender cosas nuevas para brindar el 
                     mejor servicio posible. Soy una persona que disfruta 
                     mucho de la programación.
                </p>
            </div>
            <ServicesElement />
        </section>
    )
}

export default Services;