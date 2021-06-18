import React from 'react'
import Fade from 'react-reveal/Fade';
import { SkillsItems } from './skillsItems'
import './skills.css'

function Skills(){
    return(
        <div className="about-me__skills mt-5 mb-3">
            <div>
                <ul style={{paddingLeft: "0px"}}>
                    {SkillsItems.map((item, index) => {
                        const className = `about-me__skills--language-list animate__animated animate__fadeInDown ${item.AnimationDelay}`

                        return (
                            <li className={className} key={index} style={{paddingRight: "30px", paddingTop: "10px"}}>
                                <i className={item.icon} style={{fontSize: "3em", color: `rgb(${item.rgb})`}}></i>
                                <div style={{color: "black"}}>{item.skill}</div>
                            </li>
                            
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Skills;