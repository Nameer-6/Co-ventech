import React from "react";
import map from "../../assets/Worldwide map.gif";
import backgroundImage from "../../assets/Hero.png";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import design from "../../assets/103.png"
import shade from "../../assets/HeroShaded.png";
import { Link, animateScroll as scroll, scroller } from "react-scroll";
import "../GlobalStyle/style.css";

const Map = () =>{
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
    <div className="relative py-8 px-16 flex items-center border border-secondary w-[90%] mx-auto rounded rounded-lg mt-16">
      {/* Background Image (visible on larger screens) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Overlay for the background image (visible on larger screens) */}
      <div className="absolute top-0 left-0  w-full h-full "></div>
      
      {/* Left Section */}
      <div className="relative z-10 w-full md:w-1/2 sm:w-[1/1] lg:mb-16 md:mb-16 text-center md:text-left">
      
  {/* <div
    className="bg-cover w-full h-full"
    style={{ backgroundImage: `url(${shade})`,
            backgroundPosition : 'left'
   }}
  > */}
    {/* Content inside the column */}
    <img src={design} className="w-24 mx-auto mt-8" />
    <h1 className="text-4xl font-bold mb-4">Our Worldwide Presence</h1>
    <p className="mb-8 text-base font-normal leading-7 para">
      Our software development specialists and QA automation engineers, having worked across a variety of industries, consistently deliver innovative solutions tailored to meet the specific requirements of our esteemed clients.
    </p>
    <Link to="Services" smooth={true} duration={800} onClick={() => scrollToSection("Services")}><button className="bg-secondary text-white px-12 xsm:px-4 py-3 rounded-lg hover:bg-primary-700 font-semibold hover:bg-primary hover:text-secondary transition-all duration-500">
      Explore Our Services
    </button>
    </Link>
  {/* </div> */}
</div>
      <div className="relative z-10 w-full md:w-1/2 text-white hidden md:block">
      <Player
        autoplay
        loop
        src={require('../../assets/Worldwide map.json')}
      >
      </Player>
      </div>
    </div>
    )
}
export default Map;