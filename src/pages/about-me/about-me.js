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
                <a href="https://drive.google.com/file/d/165UCNcDQk5lNjmW4FEXzN6FIKpQ7TNMz/view?usp=sharing" download="CV Marinkovich Mauricio.pdf" target="_black" className="button">
                    Descargar CV
                </a>
            </div>
        </section>
    )
}

export default AboutMe;