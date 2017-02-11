import React from "react";
import { IndexLink } from "react-router";


const ServerError = () => {

  return (
    <div class="ten offset-by-three white-background onboardingCard">
      <div class="sixteen columns">
        <div class="nine columns onbMargin text-center">
          <img class="modalIcon" src="/src/img/500error.png" />
          <h1 class="modalTitle electric-blue onbTitle"><strong class="largeText">Server Error</strong></h1>
          <h1 class="modalTitle electric-blue onbTitle">We're sorry you're experiencing this, <br /> our developers
            have been notified.</h1>
          <IndexLink to="/" class="active">Take me home!</IndexLink>
        </div>
      </div>
    </div>
  );
};


export default ServerError;
