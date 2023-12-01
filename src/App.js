import React from "react";
import Scheduler from "./component/Scheduler.js";
import Header from "./Incloud/Header.js";
import Footer from "./Incloud/Footer.js";
import Years from "./component/Years.js";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){

  return(
    <div>
      <Header/>
      <Scheduler/>
      <Footer/>
    </div>
    // <Years></Years>
  /* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Scheduler/>}/>
        <Route path="*" element={<Scheduler/>}/>
      </Routes>
    </BrowserRouter> */
  );
}

export default App;