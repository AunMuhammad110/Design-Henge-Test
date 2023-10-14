import react from "react";
import './App.css';
import Navbar from "./First_section/Navbar/Navbar";
import FirstSection from "./First_section/Main_section";
import Footer from "./LastSection/footer";
import Booking from "./bookingsection/main-booking";
export default function App(){
  return (
    <>
    <FirstSection/>
    <Booking/>
    <Footer/>
    </>
  )
}