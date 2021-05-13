import React from 'react'
import Wave from '../../Components/wave/wave'
import CompleteName from '../../Components/CompleteName/complete-name'
import './home.css'

function Home(){
    return(
        <section className="home" id="home">
            <CompleteName />
            <Wave />
        </section>
    )
}

export default Home;