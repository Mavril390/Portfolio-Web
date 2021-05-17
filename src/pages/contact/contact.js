import React from 'react'
import './contact.css'

function Contact(){
    return(
        <section className="contact container" id="contact">
            <div className="intro mt-5 mb-3">
                <h2> 
                    <i className="fas fa-mobile-alt" style={{paddingRight: "20px"}}></i>Contacto 
                </h2>
            </div>
            <div className="intro__text">
                <p>Puedes contactarme en los lugares mencionados a continuación. Intentaré responderle lo más rápido que pueda.</p>
            </div>
            <div className="contact__content mt-4">
                <a href="https://www.linkedin.com/in/mauricio-marinkovich-1075b2176/" target="_blank">
                    <button type="button" className="btn btn-primary btn-lg"><i class="fab fa-linkedin"></i> LinkedIn</button>
                </a>
                <a href="mailto:maumarinkovich@gmail.com" target="_blank">
                    <button type="button" className="contact__content--btn btn btn-danger btn-lg" formAction=""><i class="fab fa-google" style={{color: "white"}}></i> Correo </button>
                </a>
            </div>
        </section>
    )
}

export default Contact;