import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

class ProductDetails extends Component {
	constructor() {
		super();
		this.id = 1;
	}
	render() {
		this.id = this.props.match.params.id;
		return (
			<div>
				<Header />
				<h2>Product {this.id} Details</h2>
				<Footer />
			</div>
		)
	}
}

export default ProductDetails; 