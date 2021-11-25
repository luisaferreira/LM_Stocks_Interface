import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

import './assets/css/reset.css';
import './assets/css/products.css';

class Products extends Component {
	state = {
		products: []
	}

	componentDidMount() {
		this.list();
	}


	list = () => {
		axios.get('https://localhost:5001/products').then(response => {
			// debugger
			const products = response.data;
			this.setState({ products })
		})
	}

	delete = (product) => {
		if (window.confirm("Deseja realmente exclóir?")) {
			axios.delete(`https://localhost:5001/products/${product.id}`).then(response => {
				this.list();
			});
		}


	}
	render() {

		return (
			<div>
				<Header />
				<div className="main-products">
					<div className="header-products">
						<h1 className="titulo">List of Products</h1>
						<Link className="new-product" to={'/product/new'}>Add a new Product</Link>
					</div>
				
				<ul className="container-products">
					{
						this.state.products.map(p => (
							/* por questão de semântica usa as tags de li msm, se achar conveniente coloca mais uma informações do produto e tals, tenta transformar esse <li> em um card deve ficar legal */
							<li className="card">  
								<Link className="name-product" key={p.id} to={`/products/${p.id}`}>{p.name}</Link>
								<div className="container-info-product">
									<p className="info-product">R$ {p.price}</p>
									<p className="info-product">{p.quantity} units</p>
									<p className="info-product">{p.lot}</p>
								</div>

								<div className="buttons-product">
								<Link className="button-edit" to={`/product/update/${p.id}`}>Edit</Link>
								<button className="button-delete" onClick={() => { this.delete(p) }}>Delete</button>	
								</div>
								
							</li>
						))
					}
				</ul>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Products;