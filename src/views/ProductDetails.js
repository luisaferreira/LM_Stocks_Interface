import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import axios from "axios";

import './assets/css/productDetails.css'

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
                <main className="container-details">
                    <h1 className="title-details">Product details</h1>
                    <h2 className="name-product">{this.state.product.name}</h2>
                    <p className="details-product"><span className="strong">Lot:</span> {this.state.product.lot}</p>
                    <p className="details-product"><span className="strong">Price:</span> R$ {this.state.product.price}</p>
                    <p className="details-product"><span className="strong">Quantity:</span> {this.state.product.quantity} units</p>
                    <p className="details-product"><span className="strong">Validade:</span> {this.state.product.validity}</p>
                    <p className="details-product"><span className="strong">Weight:</span> {this.state.product.weight} kg/unit</p>
                    <p className="details-product"><span className="strong">Description:</span> {this.state.product.description}</p>
                </main>
                <Footer />
            </div>
        )
    }
}

export default ProductDetails;