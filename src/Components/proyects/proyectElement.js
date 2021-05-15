import React from 'react'
import {ProyectList} from './proyectList'
import './proyectElement.css'

/* col-lg-3 col-md-6 col-sm-12*/

function ProyectElement(){
    return(
        <div className="row">
            {ProyectList.map((item, index) => {
                if(item.portfolio){
                    return(
                        <div className="col-12 col-lg-12 col-md-12 col-sm-12 d-flex">
                            <div className="cardProyect">
                                <div className="cardProyect__icon">
                                    <i className={item.icon} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "5em"}}></i>
                                </div>
                                <div className="cardProyect__contect">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <a href={item.PageLink} style={{background: "#2fb4cc", color: "#fff"}}>Usted está aquí</a>
                                    <a href={item.GHLink}>Ver en GitHub <i class="fab fa-github" style={{fontSize: "1.3em"}}></i></a>
                                </div>
                            </div>
                        </div>
                    )
                }else{
                    return(
                        <div className="col-12 col-lg-12 col-md-12 col-sm-12 d-flex">
                            <div className="cardProyect">
                                <div className="cardProyect__icon">
                                    <i className={item.icon} style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", fontSize: "5em"}}></i>
                                </div>
                                <div className="cardProyect__contect">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <a href={item.PageLink}>Visitar Página</a>
                                    <a href={item.GHLink}>Ver en GitHub <i class="fab fa-github" style={{fontSize: "1.3em"}}></i></a>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default ProyectElement;