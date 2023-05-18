import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Questions from "./Questions/Questions";
import Certified from "./Certified/Certified.jsx";

const Content = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<About />} />
            <Route path="/esquemas-certificacion" element={<Certified />} />
            <Route path="/preguntas-frecuentes" element={<Questions />} />
        </Routes>
    )
}

export default Content