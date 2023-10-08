import {  FaProjectDiagram } from "react-icons/fa";
import {GrLocation} from "react-icons/gr"
import {FcCalendar} from "react-icons/fc"
import "./DetailsCard.css";

const DetailsCard = ({ details }) => {
    const { img, id, title, price, seat, publish_date, location } = details || {};
  return (
    <>
      <div className="details-card-banner">
        <div className="flex relative top-32 max-w-screen-xl mx-auto px-5">
            <p className=" text-white
             text-4xl font-bold">Event Details</p>
            <h1 className="tryphography hidden lg:block">EVENT DETAILS</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto event-details">
      <h1 className="tryphography text-white relative hidden lg:block">EVENT DETAILS</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-5 my-10">
        <div className="col-span-3 mt-5">
        <img src={img} alt="" className="h-[70vh] w-full"/>
        <div className="flex justify-between mt-5   border-b">
            <div className="flex items-center gap-x-3">
                 <FcCalendar></FcCalendar>
                <h1>{publish_date}</h1>
            </div>
            
            <div className="flex items-center gap-x-3">
             
            <FaProjectDiagram  ></FaProjectDiagram>
            <span className="font-semibold text-lg">Seat:{seat}</span>
        
            </div>
            <div className="flex items-center gap-x-3">
                <GrLocation></GrLocation>
                <h1>{location}</h1>
            </div>
        </div>
        </div>
        <div>
            <h1>from</h1>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default DetailsCard;
