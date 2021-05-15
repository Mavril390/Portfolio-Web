import React from 'react';
import { NavbarItem } from './navbar-item'
import './navbar.css';
import './menu'

function Navbar(){
    return(
        <div>
            <img className="navbar__hamburguer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAATElEQVRIS2NkoDFgpLH5DKMWEAzhAQmi/wSdhV8BiqOx+YDmFlDoAVTtAxIHNPcBzeOA5hbQPIiGvgU0jwOaWzD042DUByghQPPSFABt6AYZfO/+XQAAAABJRU5ErkJggg=="></img>
            <nav className="navbar">
                {NavbarItem.map((item, index) => {
                    if(item.name && item.surname){
                        return(
                            <a key={index} className={item.cName} href={item.href}>
                                <p>{item.name}</p> 
                                <p>{item.surname}</p>
                            </a>
                        )
                    }
                    else{
                        return (
                            <a key={index} className={item.cName} href={item.href}><i className={item.icon} style={{paddingRight: "10px"}}></i>{item.title}</a>
                        )
                    }
                })}
            </nav>
        </div>
    )
}

export default Navbar;