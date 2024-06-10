import client1 from "../../assets/portfolio1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import client5 from "../../assets/client5.png";
import client6 from "../../assets/client6.png";
import client7 from "../../assets/client7.png";
import client8 from "../../assets/client8.png";
import client9 from "../../assets/client9.png";
import client10 from "../../assets/client10.png";
import client11 from "../../assets/client11.png";
import client12 from "../../assets/client12.png";

import "./PartnerCarousel.css";
const PartnerCarousel = () => {
  return (
    <div className="container mx-auto border w-[90%] bg-primary rounded-lg mt-[8%]">
    <div className="logos">
      <div className="logos-slide">
        <img src={client1} alt="clients" className="img"/>
        <img src={client2} alt="clients" className="img"/>
        <img src={client3} alt="clients" className="img"/>
        <img src={client4} alt="clients"  className="img"/>
        <img src={client5} alt="clients" className="img"/>
        <img src={client6} alt="clients" className="img"/>
        <img src={client7} alt="clients" className="img"/>
        <img src={client8} alt="clients" className="img"/>
        <img src={client9} alt="clients" className="img"/>
        <img src={client10} alt="clients" className="img"/>
        <img src={client11} alt="clients" className="img"/>
        <img src={client12} alt="clients" className="img"/>
      </div>
    </div>
    </div>
  );
};
export default PartnerCarousel;