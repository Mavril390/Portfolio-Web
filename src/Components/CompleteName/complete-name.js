import React from 'react'
import Social from '../social/social'
import {SkillsItems} from '../skills/skillsItems'

function CompleteName(){
    return(
        <div class="home__complete-name">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-9 col-md-12 col-sm-12">
                        <Social />
                        <h1 class="home__complete-name--Mauricio animate__animated animate__fadeInUp"> Mauricio</h1>
                        <h1 class="home__complete-name--Marinkovich animate__animated animate__fadeInUp animate__delay-1s">
                            Marinkovich</h1>
                        <h1 class="home__developer animate__animated animate__fadeInUp animate__delay-2s">
                            Full Stack Developer</h1>
                    </div>
                    <div className="col-12 col-lg-3 col-md-12 col-sm-12" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <ul style={{paddingLeft: "0px"}}>
                            {SkillsItems.map((item, index) => {
                                const className = `about-me__skills--language-list animate__animated animate__fadeInDown ${item.AnimationDuration}`
                                return (
                                    <li className={className} key={index} style={{paddingRight: "20px"}}>
                                        <i className={item.icon} style={{fontSize: "3em", color: `rgb(${item.rgb})`}}></i>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompleteName;