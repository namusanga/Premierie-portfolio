import React,{useState,useEffect} from 'react';
import"../../index.css"
import "./landingpage.css"



// const App = () => {
//     const [width, setWidth] = React.useState(window.innerWidth);
//     const breakpoint = 700;
//     React.useEffect(() => {
//      const handleResizeWindow = () => setWidth(window.innerWidth);
//       // subscribe to window resize event "onComponentDidMount"
//       window.addEventListener("resize", handleResizeWindow);
//       return () => {
//         // unsubscribe "onComponentDestroy"
//         window.removeEventListener("resize", handleResizeWindow);
//       };
//     }, []);
//     if (width > breakpoint) {
//       return (
//         <div>
//           <h3>Component 1</h3>
//           <p>Current width is {width} px</p>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <h3>Component 2</h3>
//         <p>Current width is {width} px</p>
//       </div>
//     );
//   }



function Landingpage() {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 700;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         // subscribe to window resize event "onComponentDidMount"
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           // unsubscribe "onComponentDestroy"
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);

    if (width < breakpoint) {
        return (
            <>
                           
                <div className="home__img">
                           <img className="img-round" src={require("../../assets/img/DuetImage.jpg")} alt=""/>
                       </div>
                <section className="home Landing-grid" id="home">
                    

                       <div className="home__data">
                               <h1 className="home__title">Hello,<br />Welcome to <span className="home__title-color">
                                   Premierie</span><br />
                                   We Build Web Technologies</h1>
                           <a href="#" className="button">Contact</a>
           
                    <div className="home__social">
                           <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                           <a href="" className="home__social-icon"><i className='bx bxl-behance'></i></a>
                           <a href="" className="home__social-icon"><i className='bx bxl-github'></i></a>
                       </div>
                       </div>
           
                     
                   </section> 
           
                   <section className="about" id="about">
                       <h2 className="section-title">About</h2>
           
                    
                     
                               <h2 className="about__subtitle">At Premierie</h2>
                                   <p className="about__text">We believe in endless creativity. 
                                   Building meaningful things allows us to feel
                                   fulfilled so we make sure to never stop. Our large amount of experience working in software development 
                                   allows us to put together state of the art pieces of work. 
                                   We look forward to building great partnerships with the people we work with and venture the long journey of
                                   what is possible with software. Hopefully you'll join us ♥.    
                               </p>
                      </section> 
                           
           
             </>
               )
    }

    return (
        <>
                       
            <section className="home Landing-grid" id="home">
                
         

                   <div className="home__data">
                           <h1 className="home__title">Hello,<br />Welcome to <span className="home__title-color">
                               Premierie</span><br />
                               We Build Web Technologies</h1>
                       <a href="#" className="button">Contact</a>
       
                <div className="home__social">
                       <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                       <a href="https://www.behance.net/leefredrick" className="home__social-icon"><i className='bx bxl-behance'></i></a>
                       <a href="https://github.com/namusanga" className="home__social-icon"><i className='bx bxl-github'></i></a>
                   </div>
                   </div>
       
                   <div className="home__img">
                       <img className="img-round" src={require("../../assets/img/DuetImage.jpg")} alt=""/>
                   </div>
                 
               </section> 
       
               <section className="about" id="about">
                   <h2 className="section-title">About</h2>
       
                  
                           <h2 className="about__subtitle">At Premierie</h2>
                               <p className="about__text">We believe in endless creativity. 
                               Building meaningful things allows us to feel
                               fulfilled so we make sure to never stop. Our large amount of experience working in software development 
                               allows us to put together state of the art pieces of work. 
                               We look forward to building great partnerships with the people we work with and venture the long journey of
                               what is possible with software. Hopefully you'll join us ♥.    
                           </p>

               </section> 
                       
       
         </>
           )

    
  
}
            

export default Landingpage;
