import React from 'react';
import"./Projectsdone.css"

function Projectsdone() {
    return (
        <div>
               <section class="work section" id="work">
            <h2 class="section-title">Work</h2>

       
            <div class="work__container bd-grid">
                <div class="work__img">
                    <img src={require("../../assets/img/allsec_votingapp.jpg")} alt=""/>
                </div>
                <div class="work__img">
                        <img src={require("../../assets/img/DarkMode.jpg")} alt=""/>
                </div>
                <div class="work__img">
                        <img src={require("../../assets/img/watereffect.jpg")} alt=""/>
                </div>
                <div class="work__img">
                    <img src={require("../../assets/img/animating footer.jpg")} alt=""/>
                </div>
                <div class="work__img">
                        <img src={require("../../assets/img/cards.jpg")} alt=""/>
                </div>
                <div class="work__img">
                        <img src={require("../../assets/img/lights-btn.jpg")} alt=""/>
                </div>
            </div>
        </section>

        </div>
    )
}

export default Projectsdone
