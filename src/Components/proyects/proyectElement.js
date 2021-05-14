import React from 'react'
import './proyectElement.css'
import Mauricio from '../../Images/About-me/MarinkovichMauricioYannick.jpg'

/* col-lg-3 col-md-6 col-sm-12*/

function ProyectElement(){
    return(
        <div className="row">
            <div className="col-12 col-lg-12 col-md-12 col-sm-12 d-flex">
                <div className="cardProyect">
                    <figure>
                        <img src={Mauricio} alt=""></img>
                    </figure>
                    <div className="content">
                        <h3>Portfolio WEB</h3>
                        <p>HTML, CSS, JS, React.</p>
                        <a href="#proyects" style={{background: "#2fb4cc", color: "#fff"}}>Usted está aquí</a>
                        <a href="">Ver en GitHub <i class="fab fa-github" style={{fontSize: "1.3em"}}></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProyectElement;