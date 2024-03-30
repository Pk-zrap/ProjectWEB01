import React from "react";
import banner from '../../assets/P0.png'
import P1 from '../../assets/P1.png'
import P2 from '../../assets/P2.png'
import P3 from '../../assets/P3.png'
import P4 from '../../assets/P4.png'


function introPost() {
    return (
        <div>
            <div class=" flex-wrap items-center justify-between mx-auto">
                <img src={banner} />
            </div>
            <img src={P1} />
            <img src={P2} />
            <img src={P3} />
            <img src={P4} />
        </div>

    )
}
export default introPost