import React,{useEffect} from "react";
import { Helmet } from 'react-helmet';
import 'typeface-roboto';
import Hero from '../Hero/Hero';
import Navbar from '../NavBar/Navbar';
import PartnerCarousel from '../PartnerCarousel/PartnerCarousel';
import Map from '../Map/Map';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import ContactUs from '../Contact/Contact';
import Awards from '../Awards/Awards';
import Footer from '../Footer/Footer';
import ClutchWidget from '../Reviews/Reviews';
import Slider from "../Slider/Slider"
import About from '../About/About';
import Phases from "../phases/Phases"

import "./Home.css";
import Nav from "../NavBar/Nav";

const Home = () =>{
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
    return(
    <div className="App para">
      <Helmet>
        <title>CoVentech: Software Development and QA Automation Services</title>
        <meta name="description" content="Discover expert solutions with CoVentech, a renowned company with over 20 years in the field. Our team of software development experts and QA automation engineers is ready to elevate your business. Curious about our impact? Let's explore how we can drive your success together." />
      </Helmet>
      <Navbar />
      
      <main className='main'>
        <Hero />
        <Slider />
      </main>
      <PartnerCarousel />
      <Map />
      <main className='main'> 
        <Services />
      </main>
      <Phases />
      <ClutchWidget />
      <Blogs />
      <About />
      <ContactUs />
      <Awards />
      <main className='main'>
        <Footer />
      </main>
    </div>
    )
}
export default Home;