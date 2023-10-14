import {React,useState} from "react";
import './travelerDetails.css'
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function TravelerDetails(){
   const[toggleFlightDetails, setToggleFlightDetails] = useState(true);
    return(
        <>
        <h2 className="travel-details-heading">Enter Traveller Details</h2>
        <div className="traveler-details">
        
        <div className="Airpot-bar">
          <h2>Passenger 1</h2>
          {toggleFlightDetails ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
        <div className="details-main">
            <div className="passenger-bar">
                <p className="active">Adult</p>
                <p>Primary Contact</p>
            </div>
            <div className="details-title">
                <div><p>Personal Details</p></div>
                <p>As mentioned on your passport or 
                    Government approved Ids</p>
            </div>
            <form >
                <label htmlFor="" style={{
                    'font-weight': 'bold',
                }}>Select Title</label>
                <div className="gender-details">
                     <div className="active"><p>Mr.</p></div>
                    <div className="active"><p>Ms.</p></div>
                    <div className="active"><p>Mrs.</p></div>
                </div>
                <div className="traveler-personal-details">
                    <div style={{'width':'35%'}}>
                    <label htmlFor="">Given Name / First Name</label>
                    <input type="text"  />
                    </div>
                    <div style={{'width':'35%'}}>
                    <label htmlFor="">Last Name</label>
                    <input type="text"  />
                    </div>
                    <div style={{'width':'23%'}}>
                    <label htmlFor="">Date of Birth</label>
                    <input type="text"  className="dob"/>
                    </div>
                </div>
                <hr />
               <div className="details-title">
                <div>
                <p>Contact Details</p>
                </div>
                <p>Receive booking confirmation & details</p>
               </div>
                <div className="contact-form">
                    <div>
                    <label htmlFor="">Email</label>
                    <input type="text"  />
                    </div>
                    <div>
                    <label htmlFor="">Phone No</label>
                    <input type="text"  />
                    </div>
                </div>
            </form>
        </div>
        </div>

        </>
    )
}