import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { NavLink } from "react-router-dom";
class Products extends Component {
	render() {
		return (
			<div>
				<Header />
				<h1>List of Products</h1>
				<ul>
					<li>
					<NavLink activeClassName="active" exact to ="/products/1">Product 1</NavLink>
					</li>
					<li>
					<NavLink activeClassName="active" exact to ="/products/2">Product 2</NavLink>
					</li>
				</ul>
				<Footer />
			</div>
		)
	}
}

export default Products; 