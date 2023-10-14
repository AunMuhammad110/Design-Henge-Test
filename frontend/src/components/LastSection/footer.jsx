import React from "react";
import footer from './footer.png'
import { Grid } from "@mui/material";
import './footer.css'
import logo from './logo.png'
import discover from './discover.png'
import express from './express.png'
import visa from './visa.png'
import norton from './norton.png'
import iata from './iata.png'
import master from './master.png'
import paypal from './paypal.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer(){
    return (
        <div className="footer-container">
            <img src={footer} alt="there is footer waves" />
            <div>
            <Grid container spacing={2} className="main-booking-container">
            <Grid item xs={12} md={3} className="first-grid-container ">
                <img src={logo} alt="" />
                <h3>Ural holidays Ltd</h3>
                <div>
                    <div>
                    <LocationOnIcon/><p> Registered Address - Kemp House 160 City Road. London, EC1v 2NX</p>
                    </div>
                    <div><LocalPhoneIcon/> <p> 24/7 Cutomer Support <br /> +4473314442558</p></div>
                    <div>
                        <EmailIcon/> <p style={{'font-weight':'bold'}}> Contact@uralholidays.co.uk</p>
                    </div>
                </div>
                
            </Grid>
            <Grid item xs={12} md={3} className="second-grid-container ">
            <div>
            <h3>QUICK LINKS </h3>
            <ul>
                <li>
                    About us 
                </li>
                <li>
                    Privacy Policy
                </li>
                <li>
                    Payment Policy
                </li>
                <li>
                    Cookie Policy
                </li>
                <li>
                    Terms & Condition
                </li>
            </ul>
            </div>
            </Grid>
            <Grid item xs={12} md={3}  className="third-grid-container">

            <div>
            <h3>CUSTOMER SUPPORT </h3>
            <ul>
                <li>
                    FAQ
                </li>
                <li>
                    Contact Us
                </li>
            </ul>
            </div>
            </Grid>
            <Grid item xs={12} md={3} className="fourth-grid-container">
                <div>
                <h3>Don't miss our exclusive offers </h3>
                <div>
                    <input type="text" name="" id=""  placeholder="Enter email address"/>
                    <button>SIGN UP</button>

                </div>
                <div className="fourth-grid-container-images">
                    <img src={norton} alt="norton image" />
                    <img src={iata} alt="iata image" />
                </div>
                </div>
            </Grid>
            </Grid>
            
            </div>

            <Grid container spacing={2} className="last-section-container">
            <Grid item xs={12} md={6} className="last-section-copyright-container">
            <p>Copyright 2022 Ural Holidays Ltd. All rights reserved</p>
            </Grid>
            <Grid item xs={12} md={6} >
            <div className="last-section-payment-container ">
                    <p>Payment method</p>
                    <img src={visa} alt="visa card image" />
                    <img src={master} alt="master card image" />
                    <img src={paypal} alt="paypal card image" />
                    <img src={discover} alt="discover card image" />
                    <img src={express} alt="express card image" />
                </div>
            </Grid>

            </Grid>

            

        </div>
    )   
}