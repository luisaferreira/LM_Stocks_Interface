import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import axios from "axios";


class Products extends Component {
	state = {
		products: []
	}

	componentDidMount() {
		axios.get('https://localhost:5001/products').then(response => {
			// debugger
			const products = response.data;
			this.setState({ products })
		})
	}
	render() {

		return (
			<div>
				<Header />
				<h1>List of Products {this.state.products.length}</h1>
				<ul>
					{
						this.state.products.map(p => (
							<li>
								<Link key={p.id} to={`/products/${p.id}`}>{p.name}</Link>
								<Link to={`/product/update/${p.id}`}>Editar</Link>
							</li>
						))
					}
				</ul>
				<Link to={'/product/new'}>New Product</Link>
				<Footer />
			</div>
		)
	}
}

export default Products;