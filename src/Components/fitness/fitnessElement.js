import React from 'react'
import Fade from 'react-reveal/Fade';
import { FitnessItems } from './fitnessItems'
import './fitnessElement.css'

function FitnessElement(){
    return (
        <div className="row">
            {FitnessItems.map((item, index) => {
                if(item.Fade === "Left"){
                    return(
                        <Fade left>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mt-4">
                                <div class="fitness__colum">
                                    <div key={index} className="fitness__colum--img" style={{backgroundImage: `url(${item.img})`}}>
                                        <div className="fitness__colum--text">
                                            <h5 className="text-center fitness__colum--text_title">
                                                {item.title}
                                            </h5>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    )
                }
                else{
                    return(
                        <Fade right className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mt-4">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mt-4">
                                <div class="fitness__colum">
                                    <div key={index} className="fitness__colum--img" style={{backgroundImage: `url(${item.img})`}}>
                                        <div className="fitness__colum--text">
                                            <h5 className="text-center fitness__colum--text_title">
                                                {item.title}
                                            </h5>
                                            <p>
                                                {item.description}
                                            </p>
                                        </div>
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

export  default FitnessElement;