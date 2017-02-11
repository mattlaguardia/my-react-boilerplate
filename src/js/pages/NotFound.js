import React        from "react";
import { Link }     from "react-router";

export default class NotFound extends React.Component {

  render() {
    return (
    	<div class="ten offset-by-three white-background onboardingCard">
			<div class="sixteen columns">
				<div class="nine columns onbMargin text-center">
					<img class="modalIcon" src="/src/img/404Icon.png"></img>
					<h1 class="modalTitle electric-blue onbTitle"><strong class="largeText">404 Error</strong></h1>
					<h1 class="modalTitle electric-blue onbTitle">Oh no! This page is missing</h1>
				  	<a href="/" class="active">Take me home!</a>
				</div>
			</div>
		</div>
    );
  }
}
