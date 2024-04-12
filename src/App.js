import { useEffect } from "react";
import WebFont from 'webfontloader';
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Company from "./Pages/Company/Company";
import Individual from "./Pages/Individual/Individual";

const App = ()=>{
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka", "poppins","Chalkboard"],
      },
    });
  },[]);
  return <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<Company />} />
      <Route path="/individual" element={<Individual />} />
    </Routes>
}

export default App;