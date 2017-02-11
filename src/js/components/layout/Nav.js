import React, { Component, PropTypes }  from "react";
import { IndexLink }                    from "react-router";
import cookie                           from "react-cookie";


class Nav extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
        <nav class="navbar navbar-fixed white-background">
          <div class="nav-wrapper medium-vertical-padding">
            <ul id="nav-links" class="nav-hover">
              <li><IndexLink class="medium-right-border gray-border" to="/" ><strong>Home</strong></IndexLink></li>
            </ul>

            <div class="right">
              <ul>
                <li id="settings-button" class="large-right-margin nav-hover">
                  <IndexLink class="black" to="/settings" activeClassName="active"><i class="gray-medium-2 fa fa-user-circle fa-2x" aria-hidden="true"></i></IndexLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;
