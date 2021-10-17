import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Main extends Component {
  render () {
    return (
    <div>

      <NavLink activeClassName="active" exact to ="/">Home</NavLink>
      <br/>
      <NavLink activeClassName="active" exact to ="/products">Products</NavLink>
    </div>
    )
  }
}

export default Main;
