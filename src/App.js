import React from 'react';
import './index.css';
import Contanct from './Pages/Contanct/Contanct';
import Footer from './Pages/Footer/Footer';
import Landingpage from './Pages/Landingpage/Landingpage';
import Nabar from './Pages/Navbar.js/Nabar';
import Projectsdone from './Pages/Projectdone/Projectsdone';
import Skills from './Pages/Skills/Skills';

function App() {

  return (

    <>
      <Nabar/>
      <Landingpage />
      <Skills />
      <Projectsdone/>
      <Contanct />
      <Footer/>
    </>
  );
}

export default App;
