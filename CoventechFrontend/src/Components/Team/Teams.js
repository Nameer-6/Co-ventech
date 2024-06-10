import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import profile from "../../assets/TeamAvator.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./Teams.css";

// import required modules
import { Navigation , Autoplay } from 'swiper/modules';
import TeamInner from './TeamInner';
import Heading from '../../UI/Heading';

const data = [
    {
        id : 1,
        image : profile,
        title : "Zubair Alam",
        designation : "Co Founder"
    },
    {
        id : 2,
        image : profile,
        title : "Ahsan Khan",
        designation : "Co Founder"
    },
    {
        id : 3,
        image : profile,
        title : "Hasan Mujtaba",
        designation : "Automation Engineer"
    },
    {
        id : 4,
        image : profile,
        title : "Saad Asif",
        designation : "Test Automation Engineer"
    },
    {
        id : 5,
        image : profile,
        title : "Daniyal Qureshi",
        designation : "Test Automation Engineer"
    },
    {
      id : 6,
      image : profile,
      title : "Shaheer Ahmed",
      designation : "Test Automation Engineer"
  },
  {
    id : 7,
    image : profile,
    title : "Haris Zafar",
    designation : "Test Automation Engineer"
},
{
  id : 8,
  image : profile,
  title : "Shaheer Bin Haris",
  designation : "SQA Engineer"
},
    {
        id : 9,
        image : profile,
        title : "Taha Khan",
        designation : "Business Analyst"
    },
    {
        id : 10,
        image : profile,
        title : "Aqib Qasim",
        designation : "Developer"
    },
    {
        id : 11,
        image : profile,
        title : "Sohaib Abbasi",
        designation : "Developer Lead"
    },
    {
      id: 12,
      image :profile,
      title : "Daniyal Asif",
      designation : "Content Writer"
    },
    {
      id : 13,
      image : profile,
      title : "Shaheer Inayat Ali",
      designation : "Product Designer"
  },
  {
    id : 14,
    image : profile,
    title : "Usman Kareem",
    designation : "UI/UX Engineer"
  },
  {
    id : 15,
    image : profile,
    title : "Hanzala",
    designation : "UI/UX Engineer"
  },

]

function Teams() {
  return (
    <>
    <div className='mb-4'>
        <Heading heading = "Teams"/>
    </div>
      <Swiper
        slidesPerView={4}  
          autoplay={{
            delay: 1000, 
            disableOnInteraction: false, 
          }}
        modules={[Navigation , Autoplay]}
        className="mySwiper"
        breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
              },
          }}
      >
        <SwiperSlide>
            <TeamInner title = {data[0].title}  description = {data[0].designation} image = {data[0].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[1].title}  description = {data[1].designation} image = {data[1].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[2].title}  description = {data[2].designation} image = {data[2].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[3].title}  description = {data[3].designation} image = {data[3].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[4].title}  description = {data[4].designation} image = {data[4].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[5].title}  description = {data[5].designation} image = {data[5].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[6].title}  description = {data[6].designation} image = {data[6].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[7].title}  description = {data[7].designation} image = {data[7].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[8].title}  description = {data[8].designation} image = {data[8].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[9].title}  description = {data[9].designation} image = {data[9].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[10].title}  description = {data[10].designation} image = {data[10].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[11].title}  description = {data[11].designation} image = {data[11].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[12].title}  description = {data[12].designation} image = {data[12].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[13].title}  description = {data[13].designation} image = {data[13].image}/>
        </SwiperSlide>
        <SwiperSlide>
            <TeamInner title = {data[14].title}  description = {data[14].designation} image = {data[14].image}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Teams;