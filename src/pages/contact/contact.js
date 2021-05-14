import React from 'react'
import './contact.css'

function Contact(){
    return(
        <section className="contact container" id="contact">
            <div className="intro mt-5 mb-3">
                <h2 style={{color: "white"}}> 📞 Contacto </h2>
            </div>
            <div className="intro__text">
                <p>Puedes contactarme en los lugares mencionados a continuación. Intentaré responderle lo más rápido que pueda.</p>
            </div>
            <div className="contact__content mt-4">
                <button type="button" className="btn btn-primary btn-lg"><i class="fab fa-linkedin"></i> LinkedIn </button>
                <button type="button" className="contact__content--btn btn btn-danger btn-lg"><i class="fab fa-google" style={{color: "white"}}></i> Correo </button>
            </div>
        </section>
    )
}

export default Contact;