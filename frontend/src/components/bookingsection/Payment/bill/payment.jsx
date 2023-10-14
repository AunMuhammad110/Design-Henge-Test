import react from "react";
import "./payment.css";
import flight from "./flight.png";
import { brown } from "@mui/material/colors";
export default function Bill() {
  return (
    <div className="bill-container">
      <div className="bill-container-first-section">
        <div>
        <h3 >Flight</h3>
        <p style={{'color':'purple'}}>DAC - CXB</p>
        <p>One Day</p>
        </div>
        <img src={flight} alt="" />
      </div>
      <hr />
      <div className="bill-container-second-section">
        <h3 >Fare Summary</h3>
        <div>
          <p>Adult (1 Traveler)</p>
          <p>BDT 4,075</p>
        </div>
        <div>
        <p>Base Fare</p>
        <p>BDT 725</p>
        </div>
      </div>
      <hr />
      <div className="bill-container-second-section">
        <div>
        <h3 >
            Sub-Total
        </h3>
        <p>BDT 4,800</p>
        </div>
        <div>
        <p>
            Hot Deals
        </p>
        </div>
        <div>
        <p style={{'margin-bottom':'2vh'}}>
            Convenience Charge
        </p>
        </div>
        <hr />
       <div className="bill-container-last-section">
       <div > 
        <h3 >Sub-Total </h3>
        <p style={{'color':'brown'}}>BDT 4,568</p>
        </div>
       
        
       </div>
       <div>
          <p>You save</p>
          <p>BDT 326</p>
        </div>
        

      </div>
    </div>
  );
}
