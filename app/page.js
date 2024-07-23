import React from 'react';
import Header from './Header'; 
import About from './About';     
import Projects from './Projects';  
import Home from './Home';
import Contact from './Contact';  
import Experience from './Experience';  

const page = () => (
  <>
      <title>My Portfolio</title>
    <Header />
    <Home/>
    <About />
    <Experience />
    <Projects />
    <Contact />
  </>
);

export default page;
