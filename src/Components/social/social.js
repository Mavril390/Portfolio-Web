import React from 'react'
import { SocialItem } from './socialItem'
import './social.css'

function Social(){
    return(
        <div>
            {SocialItem.map((item, index) => (
                <div className="Social" key={index}>
                    <a href={item.link} target="_blank"><i className={item.icon}></i></a>
                </div>
            ))}
        </div>
    )
}

export default Social;