import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./FlightCompanyDetails.css";
import companyLogo from './flight.png'
export default function CompanyDetail() {
  const [toggleFlightDetails, setToggleFlightDetails] = useState(true);
  return (
    <div >
      <div className="flight-company-details">
        <div className="Airpot-bar">
          <h2>DAC-CXB</h2>
          {toggleFlightDetails ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
        <div className="company-details">

            <div>
                <p >Biman Bangladesh Airlines</p>
                <p>BG 433 | DHB</p>
            </div>
            <div style={{'margin-right':'3vw'}} className="plane-details">
                <p >Airline</p>
                <img src={companyLogo} alt="" />
            </div>
         
        <div className="last-tag-company-details">
            <p>(Economy)</p>
        </div>
        </div>
        <hr />
        <div className="booking-timing-details">
        
            <div>
                <p>08:30</p>
                <p>Tue 15 Nov 2022</p>
                <p>DAC</p>
            </div>
            <div >
                <p style={{'margin-left':'2vw'}}>1h 15 min</p>
                <p>---------------------------</p>
                <p style={{'margin-left':'2vw'}}>Non Stop</p>
            </div>
            <div className="last-tag-company-details">
                <p>09:45</p>
                <p>Tue 15 Nov 2022</p>
                <p>CXB</p>
            </div>
        </div>
      </div>
    </div>
  );
}
