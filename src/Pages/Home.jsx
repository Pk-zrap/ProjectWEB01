import React from 'react'
import Intropost from '../components/introPost/intropost'
import About from '../components/About/About'
import Barbleow from '../components/Bar below/Barbelow'
import P5 from '../../src/assets/P5.png'
import P6 from '../../src/assets/P6.png'


function Home() {
    return (
        <div>

            {/* Intropost*/}
            <Intropost />
            {/* About*/}
            <About />
            <div>
                <img src={P5} />
            </div>

            <div>
                <img src={P6} />
            </div>

            {/* Barbleow*/}
            <Barbleow />


        </div>

    )
}

export default Home