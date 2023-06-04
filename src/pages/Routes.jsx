import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Questions from "./Questions/Questions";
import Certified from "./Certified/Certified.jsx";
import Register from "./Register";

const Content = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<About />} />
            <Route path="/esquemas-certificacion" element={<Certified />} />
            <Route path="/preguntas-frecuentes" element={<Questions />} />
            <Route path="/registro" element={<Register />} />
        </Routes>
    )
}

export default Content