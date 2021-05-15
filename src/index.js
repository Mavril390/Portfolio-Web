import React from 'react';
import ReactDOM from 'react-dom';
import Header from './pages/header/header';
import Home from './pages/home/home'
import AboutMe from './pages/about-me/about-me'
import Proyects from './pages/proyects/proyects'
import Fitness from './pages/fitness/fitness'
import Services from './pages/services/services'
import Contact from './pages/contact/contact'
import Footer from './pages/footer/footer'
import './index.css'

ReactDOM.render(
    <body>
        <Header />
        <main>
            <Home />
            <AboutMe />
            <Proyects />
            <Fitness />
            <Services />
            <Contact />

        </main>
        <Footer />
    </body>,
    document.getElementById('root')
)