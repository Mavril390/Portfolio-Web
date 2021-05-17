import React from 'react'
import Fade from 'react-reveal/Fade';
import { ServicesItems } from './serviceItems'
import './serviceElement.css'

function ServicesElement(){
    return(
        <div className="row">
            {ServicesItems.map((item, index) =>{
                if(item.Fade === "Left"){
                    return(
                        <Fade left>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mt-4 animation">
                                <div className="services__colum mt-3">
                                    <div className="services__colum--img" style={{backgroundImage: `url(${item.img})`}}></div>
                                    <div className="services__colum--text mt-2">
                                        <h3 className="services-text-title">
                                            {item.title}
                                        </h3>
                                        <p className="services__colum--text--description">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )
                }
                else{
                    return(
                        <Fade right>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mt-4 animation">
                                <div className="services__colum mt-3">
                                    <div className="services__colum--img" style={{backgroundImage: `url(${item.img})`}}></div>
                                    <div className="services__colum--text mt-2">
                                        <h3 className="services-text-title">
                                            {item.title}
                                        </h3>
                                        <p className="services__colum--text--description">
                                            {item.description}
                                        </p>
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

export default ServicesElement;