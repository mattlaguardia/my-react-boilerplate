import React, { Component }       from "react";

import Header                     from "../components/landing/Header"
import Footer                     from "../components/landing/Footer"

const Landing = () => {

  return (
    <div class="gray-light-background">
      <div class="sixteen inline-block">
        <Header />
        <Footer />
      </div>
    </div>

  );
};

export default Landing;
