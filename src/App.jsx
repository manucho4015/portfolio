import { BrowserRouter } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, StarsCanvas, Works } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <ToastContainer theme="dark" />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/* Whatsapp Integration */}
        <a href="https://wa.me/254708928256" target='_blank' rel="noopener noreferrer">
          <motion.img drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragTransition={{ bounceStiffness: 250, bounceDamping: 10 }} dragElastic={0.5} whileDrag={{ cursor: "grabbing" }}
            src="/whatsapp-logo.png" alt="whatsapp" className='fixed bottom-[5vh] right-[5vw] md:bottom-[5vh] md:right-[5vw] inline-block h-305px] md:h-[50px] w-[30px] md:w-[50px] z-[20]' />
        </a>
      </div>
    </BrowserRouter>
  )
}

export default App
