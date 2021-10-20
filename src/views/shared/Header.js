import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <h1>LM</h1>
        {/* estiliza esses navlinks mas não muda por outra tag */}
        <NavLink activeClassName="active" exact to ="/">Home</NavLink>
        <NavLink activeClassName="active" exact to ="/products">Products</NavLink>

        <a href="https://github.com/luisaferreira/LM_Stocks_Interface">github</a>
      </div>
    )
  }
}

export default Header;
