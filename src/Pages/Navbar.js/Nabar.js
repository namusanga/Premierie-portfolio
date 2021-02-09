import React ,{useState}from 'react';
import "./Navbar.css";
import "../../assets/boxicons/css/boxicons.css"
import { css} from "@emotion/css"

function Nabar() {


    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    
    const NavMenu = css`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right:6rem;

  @media screen and (max-width: 960px) {
      position: absolute;
      left: ${(click ? 0 : '-100%')}; 
          opacity: ${(click ? 100 : "0")};
      /* 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    top: 80px;
    left: ${(click ? 0 : '-100%')}; 

    transition: all 0.7s ease;
    background: #4070F4;
    margin-right:0rem;
    */
  } 
    `

    return (
   
      <nav className="Nav" id="navbar">
                    <div className="NavbarContainer">

                    <a className="NavLogo" to="/" onClick={closeMobileMenu} >
                            {/* <NavIcon /> */}
                        Premierie
                      </a >
                {/* <div className="MobileIcon"
                    onClick={handleClick}> 
                    <i   className={click ? "bx bx-window-close" : "bx bx-menu"}/>
          </div> */}
          
                        <ul className={NavMenu}  
                        onClick={handleClick} click={click} 
                        >
                            <li className="NavItem">
                                <a className="NavLinks" href="#home">
                                    Home
                                </a>
                            </li>


                            <li className="NavItem">
                                <a className="NavLinks" href="#about">
                                   About
                                </a>
                            </li>



                            <li className="NavItem">
                                <a className="NavLinks" href="#skills">
                                    Skills
                                </a>
                            </li>
                            <li className="NavItem">
                                <a className="NavLinks" href="#work">
                                    Work
                                </a>
                            </li>
                            <li className="NavItem">
                                <a className="NavLinks" href="#contact">
                                    Contact
                                </a>
                            </li>
                            
                  
                        </ul>
                    </div>

                </nav>


    )
}

export default Nabar
