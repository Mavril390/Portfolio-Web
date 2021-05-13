import React from 'react'
import InfoAboutMe from '../../Components/info-about-me/info-about-me'
import Skills from '../../Components/skills/skills'
import './about-me.css'

function AboutMe(){
    return(
        <section className="about-me container" id="about-me">
            <div className="margin">
                <InfoAboutMe />
            </div>
            <div>
                <Skills />
            </div>
            <div className="mt-4 mb-5">
                <a href="#" target="_black" className="button">
                    Descargar CV
                </a>
            </div>
        </section>
    )
}

export default AboutMe;