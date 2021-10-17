import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

class Error404 extends Component {
	render() {
		return (
			<div>
				<Header />
				<h2>Oops... Page not found :/</h2>
				<Footer />
			</div>
		)
	}
}

export default Error404; 