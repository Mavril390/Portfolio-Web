import React from 'react'
import Fade from 'react-reveal/Fade';
import {ProyectList} from './proyectList'
import './proyectElement.css'

/* col-lg-3 col-md-6 col-sm-12*/

function ProyectElement(){
    return(
        <div>
            {ProyectList.map((item, index) => {
                if(item.portfolio){
                    return(
                        <Fade left>
                            <div className="cardProyect row">
                                <div className="col-12 col-lg-4 col-md-4 col-sm-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div className="cardProyect__icon">
                                        <i className={item.icon} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "5em"}}></i>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 col-md-8 col-sm-8">
                                    <div className="cardProyect__contect">
                                        <h3 style={{color: "black"}}>{item.title}</h3>
                                        <p className="cardProyect__contect--description">{item.description}</p>
                                        <a href={item.PageLink} style={{background: "#731007", color: "#fff"}}>Usted está aquí</a>
                                        <a href={item.GHLink} target="_blank">Ver en GitHub <i class="fab fa-github" style={{fontSize: "1.3em"}}></i></a>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )    
                }
                else if(item.programming == true){
                    return(
                        <Fade left>
                            <div className="cardProyect row">
                                <div className="col-12 col-lg-4 col-md-4 col-sm-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                    <div className="cardProyect__icon">
                                        <i className={item.icon} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "5em"}}></i>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-8 col-md-8 col-sm-8">
                                    <div className="cardProyect__contect">
                                        <h3 style={{color: "black"}}>{item.title}</h3>
                                        <b>En construcción...</b>
                                        <p className="cardProyect__contect--description">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )
                }
                else{
                    return(
                        <Fade left>
                                <div className="cardProyect row">
                                    <div className="col-12 col-lg-4 col-md-4 col-sm-4" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <div className="cardProyect__icon">
                                            <i className={item.icon} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "5em"}}></i>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-8 col-md-8 col-sm-8">
                                        <div className="cardProyect__contect">
                                            <h3 style={{color: "black"}}>{item.title}</h3>
                                            <p className="cardProyect__contect--description">{item.description}</p>
                                            <a href={item.PageLink} target="_blank">Visitar Página</a>
                                            <a href={item.GHLink} target="_blank">Ver en GitHub <i class="fab fa-github" style={{fontSize: "1.3em"}}></i></a>
                                        </div>
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