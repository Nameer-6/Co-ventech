import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import "../GlobalStyle/style.css"

const ServiceInner = (props) =>{
    return(
    <div className="col-span-1 row-span-1 flex items-center justify-center">
        <div className="border border-secondary bg-primary rounded-lg py-8 px-4 w-full text-center hover:scale-105 transition-transform h-[100%]">
        <Player
            autoplay
            loop
            src = {props.src}
            style={{ height: '80px', width: '80px' }}
        >
        </Player>
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-10 md:leading-12 lg:leading-14">{props.title}</h2>
        <h5 className="text-base font-normal leading-7 pt-4">{props.description}</h5>
        </div>
    </div>
    )
}
export default ServiceInner;