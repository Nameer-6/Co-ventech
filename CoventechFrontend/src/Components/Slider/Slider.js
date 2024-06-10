// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Slider.css";
// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import SliderContent from "./SliderContent";
import Heading from "../../UI/Heading";

import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";
import portfolio7 from "../../assets/portfolio7.png";
import portfolio8 from "../../assets/portfolio8.png";
import portfolio9 from "../../assets/Measuring U.png";
import portfolio10 from "../../assets/UpNest.png";
import portfolio11 from "../../assets/technyx_logo.png";
import portfolio12 from "../../assets/neosol_logo.png";

const slider_data = [
  {
    id: 1,
    title : "Rawcaster",
    description : "Coventech's performance testing for Rawcaster optimized its content platform, ensuring efficiency and a seamless user experience under various conditions.",
    Image : portfolio1
  },
  {
    id: 2,
    title : "Bayzat",
    description : "Bayzat's digital processes were revolutionized by Coventech's web automation services, enhancing efficiency and accuracy in operations.",
    Image : portfolio2
  },
  {
    id: 3,
    title : "CreditBook",
    description : "Coventech's collaboration with CreditBook led to 500+ BDD test cases and a robust Selenium and Appium framework, enhancing performance and security.",
    Image : portfolio3
  },
  {
    id: 4,
    title : "Wellteq",
    description : "Coventech delivered advanced mobile and API automation for Wellteq, improving app performance and user experience across all devices.",
    Image : portfolio4
  },
  {
    id: 5,
    title : "Bykea",
    description : "Coventech provided Bykea comprehensive testing services, from API automation to security, enhancing performance and fortifying security.",
    Image : portfolio5
  },
  {
    id: 6,
    title : "Seed Labs",
    description : "Coventech's suite for SeedsLab included penetration, load testing, and API testing, bolstering their digital infrastructure and software reliability.",
    Image : portfolio6
  },
  {
    id: 7,
    title : "NoiseLab",
    description : "Coventech's load more testing for Noise Lab's platform ensured scalable, uninterrupted music streaming for a growing user base experience.",
    Image : portfolio7
  },
  {
    id: 8,
    title : "TELEMEDIC",
    description : "Telemedic's software quality was elevated by Coventech through comprehensive QA automation,API automation , and CI/CD pipeline implementation.",
    Image : portfolio8
  },
  {
    id: 9,
    title : "Measuring U",
    description : "We conducted regular security audits and penetration tests for Measuring U, ensuring ongoing resilience against threats.",
    Image : portfolio9
  },
  {
    id: 10,
    title : "UpNest",
    description : "Utilizing Selenide, our automation services significantly improved UpNest's web operation efficiency and user experience.",
    Image : portfolio10
  },
  {
    id: 11,
    title : "Technyx Systems",
    description : "We delivered a comprehensive penetration test report for Technyx Systems on time, addressing critical system vulnerabilities.",
    Image : portfolio11
  },
  {
    id: 12,
    title : "Neusole",
    description : "Our high-quality, on-budget deliverables for Neusolme met expectations with timely documentation and adherence to timelines.",
    Image : portfolio12
  },
]
const Slider = () => {
  return (
    <div id="Projects">
      <div className="w-[90%] mx-auto">
        <Heading heading="Our Success Stories" />
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        centeredSlides={true}
        freeMode={true}
        
        modules={[FreeMode, Autoplay]}
        className="mySwiper"

        autoplay={{
          delay: 2000, // Adjust the delay in milliseconds as needed
          disableOnInteraction: false, // Allow autoplay to continue after user interactions
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 1,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <SliderContent title = {slider_data[0].title} description = {slider_data[0].description} image = {slider_data[0].Image}/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[1].title} description = {slider_data[1].description} image = {slider_data[1].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[2].title} description = {slider_data[2].description} image = {slider_data[2].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[3].title} description = {slider_data[3].description} image = {slider_data[3].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[4].title} description = {slider_data[4].description} image = {slider_data[4].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[5].title} description = {slider_data[5].description} image = {slider_data[5].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[6].title} description = {slider_data[6].description} image = {slider_data[6].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[7].title} description = {slider_data[7].description} image = {slider_data[7].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[8].title} description = {slider_data[8].description} image = {slider_data[8].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[9].title} description = {slider_data[9].description} image = {slider_data[9].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[10].title} description = {slider_data[10].description} image = {slider_data[10].Image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderContent title = {slider_data[11].title} description = {slider_data[11].description} image = {slider_data[11].Image} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;