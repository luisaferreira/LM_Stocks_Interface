import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import axios from "axios";

class ProductDetails extends Component {
	state = {
        product: {
            id: 0,
            name: "",
            price: 0,
            weight: 0, 
            quantity: 0,
            lot: "",
            validity: "2020-07-26T00:00:00",
            description: ""
        }
    }

	componentDidMount() {
        let id = this.props.match.params.id;

        if (id) {
            axios.get(`https://localhost:5001/products/${id}`).then(response => {
                const product = response.data;
                this.setState({ product });
            })
        }
    }

	render() {
		this.id = this.props.match.params.id;
		return (
			<div>
				<Header />
				{/* Essas informações aqui cê ajeita na tela do jeito q quiser, mas lembra de usar o state.product */}
				<h2>{this.state.product.name}</h2>
				<p>Lote: {this.state.product.lot}</p>
				<p>Preço: R$ {this.state.product.price}</p>
				<p>Quantidade: {this.state.product.quantity}</p>
				<p>Validade: {this.state.product.validity}</p>
				<p>Peso: {this.state.product.weight}</p>
				<p>Descrição: {this.state.product.description}</p>
				<Footer />
			</div>
		)
	}
}

export default ProductDetails; 