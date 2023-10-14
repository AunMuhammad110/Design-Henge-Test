import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './flightdetails.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
export default function FlightCompanyDetails() {
  const [toggleFlightDetails, setToggleFlightDetails] = useState(true);
  return (
    <div >
      <div className="flight-details">
        <div className="Airpot-bar">
          <h2>Flight Details</h2>
          {toggleFlightDetails ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div>
        <div className="flight-details-bar">
            <ul>
                <li style={{'color':'brown', 'border-bottom':'5px solid brown'}}>
                      Baggage  
                </li>
                <li>
                    Fare
                </li>
                <li>
                    Policy
                </li>
            </ul>
            <p>
                (Economy)
            </p>

        </div>
        <hr />
        <div className="flight-timings">
            <div>
                <p style={{'color':'brown'}}>FLight</p>
                <p>DAC</p>
            </div>
            <div>
                <p style={{'color':'brown'}}>Cabin</p>
                <p>7 Kilograms</p>
            </div>
            <div>
                <p style={{'color':'brown'}}>Check-In</p>
                <p>20 Kilograms</p>
            </div>
        </div>
        <div className="flight-details-note">
            <div><ErrorOutlineIcon/></div>
            <p> Check-in baggage is not included in this fare. you have to purchase it later from the airline or at the airpot.</p>
        </div>
      </div>
    </div>
  );
}
