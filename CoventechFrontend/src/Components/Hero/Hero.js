import React from "react";
// import logo2 from "../../assets/logo2.png";
import design1 from "../../assets/HeroDesign1.png";
import design3 from "../../assets/HeroDesign3.png";
import shade from "../../assets/HeroShaded.png";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import styles from './Hero.module.css';
import logo2 from "../../assets/logo.gif";

const Hero = () =>{
  const scrollToSection = (sectionId) => {
    // Get the height of your fixed header
    const offset = document.querySelector('nav').offsetHeight;

    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -offset - 50, // Adjusted offset to account for the fixed header
    });
  };
    
  return(
    <div className="relative h-screen flex items-center" id="Overview">
    {/* Left Section */}
    <div className="relative z-10 w-1/2 text-black xmd:hidden block">
      {/* Background Image */}
      <img src={shade} className="absolute h-full w-full" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start">
        <img src={design1} className="w-1/5" />
        <img src={logo2} className="w-full" />
      </div>
    </div>
        {/* Right Section (visible on all screens) */}
        <div className="relative  w-full lg:w-1/2 text-black xmd:w-[90%] xmd:text-center xmd:mx-auto">
          <img src={design3} className="w-1/5 float-right hidden md:block"/>
          <h1 className="text-4xl font-bold mb-4 md:w-4/5">Elevate and Transform Your Business Horizon with CoVentech</h1>
          <p className={`mb-8  text-lg font-normal leading-7 xmd:text-center ${styles.para}`}>
            We are Focused on crafting the future of technology with today's innovative solutions. Our software development experts and QA automation engineers are seamlessly committed to transforming your business with the latest tech solutions.
          </p>
          <Link to="Contact" smooth={true} duration={800} onClick={() => scrollToSection("Contact")}><button type="button" className="text-white bg-secondary hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-lg px-8 py-2 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 hover:bg-primary hover:text-secondary transition-all duration-500">Get In Touch</button></Link>
        </div>
      </div>
    );
  }

export default Hero;