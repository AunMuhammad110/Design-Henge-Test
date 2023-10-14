import React from "react";
import { Grid } from "@mui/material";
import './main-boolking.css'
// import { brown } from "@mui/material/colors";
import CompanyDetail from "./CompanyDetails/companydetails/company-details";
import FlightCompanyDetails from "./FlightDetails/FlightDetails";
import TravelerDetails from "./TravelerDetails/travelerDetails";
import PassportInfo from "./PassportInformation/Passportinfo";
import Timer from "./Payment/timercomponent/timer";
import Bill from "./Payment/bill/payment";
export default function Booking(){
    return (
        <div className="main-container">
        <Grid container spacing={2} className="main-booking-container">
        <Grid item xs={12} md={8} >
        <div className="booking-bar">
            <h2 style={{'color':'brown'}}>Review Your Booking </h2>
            <ul>
                <li>
                    Flight Section
                </li>
                <li style={{'color':'brown'}}>
                    Booking
                </li>
                <li>
                    Payment
                </li>
            </ul>
            
        </div>
        <CompanyDetail/>
        <FlightCompanyDetails/>
        <div className="suggestion-container">
            <p style={{'color':'brown','margin-right':'0.2vw'}}>Sign In </p>
            <p> to Book faster and unlock</p>
        </div>
        <div className="coupon-container">
            <a style={{'color':'black','font-size':'22px'}} href="">Have a Coupon?</a>
        </div>
        <TravelerDetails/>
        <PassportInfo/>
        
        <div className="submission-container">
        <div>
        <input type="checkbox" />
        <label htmlFor="">Save this to my traveler list</label>
        </div>
        <button>Continue</button>
        </div>

        </Grid>
        <Grid item xs={12} md={4} className="second-container" >
            <div>
            <Timer/>
            <Bill/>
            </div>
        </Grid>
    </Grid>
 
         </div> 

    )
}