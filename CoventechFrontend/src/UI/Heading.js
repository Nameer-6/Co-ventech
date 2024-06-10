import React from "react";

const Heading = (props) =>{
    return(
        <div>
            <h1 className="lg:text-4xl sm:text-3xl xsm:text-2xl font-bold text-left">{props.heading}</h1>
        </div>
    )
}

export default Heading;