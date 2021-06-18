import React from 'react'
import Social from '../social/social'
import {SkillsItems} from '../skills/skillsItems'

function CompleteName(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-8 col-md-12 col-sm-12 home__name" style={{margin: "30vh 0", padding: "0"}}>
                    <h1 className="home__complete-name animate__animated animate__fadeInUp">MARINKOVICH MAURICIO</h1>
                    <h1 className="home__fullstack animate__animated animate__fadeInUp animate__delay-1s">FULL STACK WEB DEVELOPER</h1>
                    <Social/>
                </div>
                <div className="col-12 col-lg-4 col-md-12 col-sm-12 home__skills" style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "30vh 0"}}>
                    <ul style={{paddingLeft: "0px"}}>
                        {SkillsItems.map((item, index) => {
                            const className = `about-me__skills--language-list animate__animated animate__fadeInDown ${item.AnimationDelay}`
                            return (
                                <li className={className} key={index} style={{paddingRight: "20px"}}>
                                    <i className={item.icon} style={{fontSize: "4em", color: `rgb(${item.rgb})`}}></i>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CompleteName;