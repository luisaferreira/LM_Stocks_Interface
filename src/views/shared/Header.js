import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from '../assets/images/logo.png';
import '../assets/css/header.css'
class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" />
        {/* estiliza esses navlinks mas não muda por outra tag */}

        <div className="navegacao">
          <NavLink activeClassName="active" className="links" exact to="/">Home</NavLink>
          <NavLink activeClassName="active" className="links" exact to="/products">Products</NavLink>

          <a href="https://github.com/luisaferreira/LM_Stocks_Interface" className="links">Github</a>
        </div>


      </div>
    )
  }
}

export default Header;
