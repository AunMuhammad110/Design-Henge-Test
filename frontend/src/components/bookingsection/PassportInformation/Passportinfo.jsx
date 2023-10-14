import React from "react";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import './Passportinfo.css'
export default function PassportInfo(){
    const [toggleFlightDetails, setToggleFlightDetails] = useState(true);
    return(
        <div className="PassportInfo-Section">
        <div className="Airpot-bar">
          <h2>Passport Information</h2>
          {toggleFlightDetails ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </div> 
      <div className="passport-info-main">
        <div>
            <p>Passport should be valid for 6 months from the date of entry</p>
        </div>
        <form >
        <div className="contact-form">
                 <div>
                <label htmlFor="">Passport Information</label>
                    <input type="text"  />
                    </div>
                    <div>
                    <label htmlFor="">Passport Expiry Date</label>
                    <input type="text"  />
                    </div>
                </div>
        </form>
      </div>

        </div>
    )
}