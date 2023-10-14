import React from "react";
import clock from './clock.png'
import './timer.css'
export default function Timer(){
    return (
      <div className="timer-container">
        <div>
        <p>
            Book now before tickets run out!
        </p>
        </div>
        <img src={clock} alt="" />
        <h2 >24 : 47</h2>
        <p>MIN  SEC</p>
      </div>
    )
}