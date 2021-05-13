import React from 'react'
import './info-about-me.css'

function InfoAboutMe(){
    return(
        <div>
            <div className="about-me__profile mb-3"></div>
            <div className="about-me__info">
                <div className="mb-3 mt-3">
                    <h1>
                        SOBRE MI
                    </h1>
                </div>
                <div>
                    <p> ¡Hola! Me llamo Mauricio. </p>
                    <p>
                        Soy un joven desarrollador de 20 años. 
                        Actualmente me encuentro cursando la carrera
                        <b>Licenciatura en Informática</b> 
                        en la <b>Universidad Nacional de Quilmes (UNQ)</b>, 
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
                </div>
            </div>
        </div>
    )
}

export default InfoAboutMe;