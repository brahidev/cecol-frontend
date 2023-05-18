import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Routes";
import Header from "../components/header";
import Footer from "../components/footer";

import {
  BrowserView,
  MobileView
} from "react-device-detect";

export default function AppCecol() {
  return (
    <div>
      <Router>
          <BrowserView>
            <Header/>
              <Content/>
            <Footer/>
          </BrowserView>
          <MobileView>
            <Content/>
          </MobileView>
      </Router>
    </div>
  );
}