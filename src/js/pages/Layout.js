import React, { Component } from "react"
import Nav from "../components/layout/Nav"


class Layout extends React.Component {
  
  render() {
    
    const { location, children } = this.props;

    return (
      <div class="gray-light-background">
        <Nav location={location} />
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default Layout;
