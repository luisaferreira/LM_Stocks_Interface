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
				<h1>List of Products</h1>
				<ul>
					{
						this.state.products.map(p => (
							/* por questão de semântica usa as tags de li msm, se achar conveniente coloca mais uma informações do produto e tals, tenta transformar esse <li> em um card deve ficar legal */
							<li>  
								<Link key={p.id} to={`/products/${p.id}`}>{p.name}</Link>
								<Link to={`/product/update/${p.id}`}>Edit</Link>
								<button onClick={() => { this.delete(p) }}>Exclói</button>
							</li>
						))
					}
				</ul>
				{/* Também não muda as tags Link, mas nessa aqui se tiver afim de tornar um botão coloca uma div em volta e estiliza */}
				<Link to={'/product/new'}>New Product</Link>
				<Footer />
			</div>
		)
	}
}

export default Products;