import React from "react";
import backgroundImage from "../../assets/Hero.png";
import "./Slider.css";
import "../GlobalStyle/style.css";

const SliderContent = (props) =>{
    return(
    <div className="relative py-8 px-16 flex items-center border border-secondary w-[100%] rounded rounded-lg mt-16 h-96">
      {/* Background Image (visible on larger screens) */}
      <div
        className="absolute top-0 left-0 hidden md:block w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      ></div>

      {/* Overlay for the background image (visible on larger screens) */}
      <div className="absolute top-0 left-0 hidden md:block w-full h-full "></div>
      
      {/* Left Section */}
      <div className= "relative z-10 w-full md:w-1/2 sm:w-[1/1] text-center md:text-left">
        
        <h1 className="text-4xl font-bold mb-4">{props.title}</h1>
        <p className=" mb-8 text-base font-normal leading-7 para">
          {props.description} 
        </p>
      </div>
      <div className="relative  z-10 w-full md:w-1/2 text-white hidden md:block">
        <img src={props.image}/>
      </div>
    </div>
    )
}
export default SliderContent;