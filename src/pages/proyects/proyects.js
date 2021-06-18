import React from 'react'
import ProyectElement from '../../Components/proyects/proyectElement'
import './proyects.css'

function Proyects(){
    return(
        <section className="proyects" id="proyects">
            <div className="container">
                <div className="intro mb-3 proyects--title">
                    <h2> 
                        <i className="fas fa-project-diagram" style={{paddingRight: "20px"}}></i>Mis Proyectos 
                    </h2>
                </div>
                <div class="intro__text">
                    <p>Trato de que mis proyectos utilicen herramientas de última tecnología. Mi mejor experiencia es crear proyectos de sitios web. A continuación se muestran algunos de mis proyectos.</p>
                </div>
                <div>
                    <ProyectElement />
                </div>
            </div>
        </section>
    )
}

export default Proyects;