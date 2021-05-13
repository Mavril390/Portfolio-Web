import React from 'react'
import { ServicesItems } from './serviceItems'
import './serviceElement.css'

function ServicesElement(){
    return(
        <div className="row">
            {ServicesItems.map((item, index) =>{
                return(
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 mb-4 mt-4 animation">
                    <div class="services__colum mt-3">
                        <div class="services__colum--img" style={{backgroundImage: `url(${item.img})`}}></div>
                        <div class="services__colum--text mt-2">
                            <h3 class="services-text-title">
                                {item.title}
                            </h3>
                            <p class="services__colum--text--description">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default ServicesElement;