import React from 'react'
import Fade from 'react-reveal/Fade';
import './info-about-me.css'

function InfoAboutMe(){
    return(
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Fade left>
                    <div className="mb-4 about-me__profile"></div>
                </Fade>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 mb-4 about-me__info">
                <Fade top>
                    <div className="mb-3 mt-3">
                        <h1>
                            <i className="fas fa-address-card" style={{paddingRight: "20px"}}></i>SOBRE MI
                        </h1>
                    </div>
                </Fade>
                <Fade>
                    <div>
                        <p> ¡Hola! Me llamo Mauricio. </p>
                        <p>
                            Soy un joven desarrollador de 21 años. 
                            Actualmente me encuentro cursando la carrera
                            <b> Licenciatura en Informática</b> en la
                            <b> Universidad Nacional de Quilmes (UNQ)</b>, 
                            y también me capacito en forma personal sobre 
                            otras tecnologias que me interesan, como PHP, por ejemplo.
                        </p>
                        <p>
                            Intento además, aprender y aplicar siempre 
                            las mejores prácticas, para realizar así, 
                            un código mucho mas limpio, prolijo y entendible.
                        </p>
                        <p>
                            Actualmente estoy buscando una oportunidad laboral 
                            para seguir desarrollando y aprendiendo nuevas habilidades. 
                            Me motivan los nuevos retos y me encanta buscar
                            la forma más eficiente de hacer las cosas.
                        </p>
                        <p>
                            Estoy seguro que gracias a mis conocimientos,
                            podré aportar valor a la empresa. Me preocupo 
                            siempre por aprender cosas nuevas para brindar el 
                            mejor servicio posible. Soy una persona que disfruta 
                            mucho de la programación.
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default InfoAboutMe;