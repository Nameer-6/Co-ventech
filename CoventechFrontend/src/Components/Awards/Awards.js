import React from "react";
import award1 from "../../assets/award1.png";
import award2 from "../../assets/award2.png";
import award3 from "../../assets/award3.png";
import award4 from "../../assets/award4.png";
import AwardsInner from "./AwardsInner";

const data = [
    {
        id : 1,
        award : award1,
    },
    {
        id : 2,
        award : award2,
    },
    {
        id : 3,
        award : award3,
    },
    {
        id : 4,
        award : award4,
    },
]
const Awards = () =>{
    return(
        <div className="text-center mt-24 w-[90%] mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-14">Awards & Acheivements</h2>
            <h5 className="text-base font-normal leading-7">At Co-Ventech, we're more than a company; we're architects of innovation and collaborators in your success story. </h5>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8">
                {data.map(award => <AwardsInner key = {award.id} imagesrc = {award.award} />)}
            </div>
        </div>

    )
}
export default Awards;