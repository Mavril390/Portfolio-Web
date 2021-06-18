import React from 'react';
import { NavbarItem } from './navbar-item'
import './navbar.css';
import './menu'

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" style={{textAlign: "center"}}>
                    {NavbarItem.map((item, index) => {
                        return (
                            <li class="nav-item">
                                <a key={index} aria-current="page" className="navbar__menu nav-link" href={item.href}><i className={item.icon} style={{paddingRight: "10px"}}></i>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;