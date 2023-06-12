import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Routes";
import Header from "../components/header";
import HeaderMB from "../components/headerMobile"
import Footer from "../components/footer";
import FooterMB from "../components/footerMobile";

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
            <HeaderMB/>
            <Content/>
            <FooterMB/>
          </MobileView>
      </Router>
    </div>
  );
}