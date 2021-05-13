import React from 'react'
import { SkillsItems } from './skillsItems'
import './skills.css'

function Skills(){
    return(
        <div className="about-me__skills mt-5 mb-3">
            <h3>
                Mis Habilidades
            </h3>
            <div>
                <ul style={{paddingLeft: "0px"}}>
                    {SkillsItems.map((item, index) => {
                        return (
                            <li className="about-me__skills--language-list" key={index} style={{paddingRight: "20px"}}>
                                <i className={item.icon} style={{fontSize: "3em", color: `rgb(${item.rgb})`}}></i>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Skills;