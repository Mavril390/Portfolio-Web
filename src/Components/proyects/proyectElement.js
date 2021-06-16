import React from 'react'
import Fade from 'react-reveal/Fade';
import {ProyectList} from './proyectList'
import './proyectElement.css'

/* col-lg-3 col-md-6 col-sm-12*/

function ProyectElement(){
    return(
        <div className="row" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            {ProyectList.map((item, index) => {
                if(item.portfolio){
                    return(
                        <Fade left>
                            <div className="cardProyect">
                                <div className="cardProyect__icon">
                                    <i className={item.icon} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "5em"}}></i>
                                </div>
                                <div className="cardProyect__contect">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <a href={item.PageLink} style={{background: "#2fb4cc", color: "#fff"}}>Usted está aquí</a>
                                    <a href={item.GHLink} target="_blank">Ver en GitHub <i class="fab fa-github" style={{fontSize: "1.3em"}}></i></a>
                                </div>
                            </div>
                        </Fade>
                    )    
                }
                else if(item.programming == true){
                    return(
                        <Fade left>
                            <div className="cardProyect">
                                <div className="cardProyect__icon">
                                    <i className={item.icon} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "5em"}}></i>
                                </div>
                                <div className="cardProyect__contect">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <b>En construcción...</b>
                                </div>
                            </div>
                        </Fade>
                    )
                }
                else{
                    return(
                        <Fade left>
                                <div className="cardProyect">
                                    <div className="cardProyect__icon">
                                        <i className={item.icon} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "5em"}}></i>
                                    </div>
                                    <div className="cardProyect__contect">
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <a href={item.PageLink} target="_blank">Visitar Página</a>
                                        <a href={item.GHLink} target="_blank">Ver en GitHub <i class="fab fa-github" style={{fontSize: "1.3em"}}></i></a>
                                    </div>
                                </div>
                        </Fade>
                    )
                }
            })}
        </div>
    )
}

export default ProyectElement;