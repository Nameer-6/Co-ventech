import React from "react";
import backgroundImage from "../../assets/HeroDesign1.png";
import "../GlobalStyle/style.css";
import Teams from "../Team/Teams";
const About = () =>{
    return(
      <>
    <div className={`font-sans relative py-8 px-16 border border-secondary w-[90%] mx-auto rounded rounded-lg mt-16`}
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat : "no-repeat",
      backgroundPosition: "top right"
    }}
    id="About">
        <div className="flex items-center "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat : "no-repeat",
          backgroundPosition: "bottom center"
        }}
        >
      {/* Background Image (visible on larger screens) */}

      {/* Left Section */}
      <div className="relative z-10 w-full lg:w-[65%] md:w-[65%] sm:w-[1/1] lg:mb-16 md:mb-16 text-center md:text-left">

    {/* Content inside the column */}
    <h1 className="text-4xl font-bold leading-14 tracking-normal text-left mt-8">About us</h1>
    <p className="text-base font-normal leading-7 tracking-normal text-left mt-2 para">
    We alter your business and synchronize with our top-tier go-to solutions with the help of our mastermind software developers and Visionary QA engineers.
    </p>
</div>
      <div className="relative z-10 w-full md:w-[35%] hidden md:block p-8">
        <h1 className="font-poppins text-5xl font-semibold leading-15 tracking-normal ">Your Tech Vision, Our Mission</h1>
      </div>
      </div>
      <Teams />
    </div>
    </>
    )
}
export default About;