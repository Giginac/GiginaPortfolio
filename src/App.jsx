import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParticleBackground from './components/Particle'
import Skills from './components/Skills'
import Projects from './components/projects'
import Contact from './components/Contact'
import Footer from './components/Footer' 
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
 
  useEffect(()=>{
    AOS.init({
      duration: 1000, 
    });
   
  },[]);
  return (

    <>
    <ParticleBackground />
    <ToastContainer/>
    <Navbar />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
     
  )
}

export default App