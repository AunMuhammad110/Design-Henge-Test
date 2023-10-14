import React from "react";
import './first-section.css';
import banner from './banner.png';
import Navbar from "./Navbar/Navbar";

export default function FirstSection() {
  return (
    <>
      <div className="container">
        <img src={banner} alt="this is something different" className="first-main-image"/>
       <div >
         <Navbar/>
          <div className="first-section-main-heading">
            <h1>
              The World is Yours
            </h1>
            <p>
              Sign  up  to  get  Ural  Holidays  Promo  Code
              <br />
              and  Enjoy  Upto  25%  Discount
            </p>
            <p>

            </p>
          </div>

       </div>
        {/* <Navbar/> */}

      </div>
    </>
  );
}
