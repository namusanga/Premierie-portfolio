import React from 'react';
import "./Skills.css"
import "../../assets/boxicons/css/boxicons.css"


function Skills() {
    return (
        <div>
              <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">
                <div>
                    <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text">Over the course of about 8 years we have acquired numerous skills, even
                    those outside typical web development. We believe this allows us set a different type of standard for the quality of our work. </p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-html5  skills__icon'></i>
                            <span className="skills__name">HTML5, CSS 3, JAVASCRIPT</span>
                            </div>
                            <div className="skills__bar skills__ux">

                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-react skills__icon'></i>
                            <span className="skills__name">REACT</span>
                            </div>
                            <div className="skills__bar skills__ux">

                        </div>
                       
                        </div>
                        
                        <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-angular skills__icon'></i>
                            <span className="skills__name">ANGULAR</span>
                            </div>
                            <div className="skills__bar skills__ux">

                        </div>
                        
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-google skills__icon'></i>
                            <span className="skills__name">FLUTTER</span>
                            </div>
                            <div className="skills__bar skills__ux">

                        </div>
                       
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-microsoft  skills__icon'></i>
                            <span className="skills__name">.NET</span>
                            </div>
                            <div className="skills__bar skills__ux">

                        </div>
                        
                    </div>

                    <div className="skills__data">
                        <div className="skills__names">
                                <i className='bx bxl-microsoft  skills__icon'></i>
                                {/* <span class="iconify" data-icon="bx-bxl-c-plus-plus" data-inline="false"></span> */}
                                {/* <box-icon type='logo' name=''></box-icon> */}
                            <span className="skills__name">C++</span>
                        </div>
                        <div className="skills__bar skills__ux">

                        </div>
                    
                    </div>
                </div>

                <div>
                    <img src={require("../../assets/img/skills.svg")} alt="" className="skills__img"/>
                  
                </div>
            </div>
        </section>
        </div>
    )
}

export default Skills
