import React, { Component } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import axios from "axios";

import './assets/css/reset.css';
import './assets/css/addProduct.css';

class AddProduct extends Component {
    state = {
        product: {
            id: 0,
            name: "",
            price: 0,
            weight: 0,
            quantity: 0,
            lot: "",
            validity: "2020-07-26T00:00:00", //Aqui em validity usa um datetime pra inicialmente setar a validade como a data e hora do momento
            description: ""
        }
    }

    onChange = (e) => {
        let product = this.state.product;

        product[e.target.name] = e.target.value;
        this.setState({ product: product });
    }

    save = () => {
        if (this.state.product.id > 0) {
            console.log(123);

            axios.put(`https://localhost:5001/products/${this.state.product.id}`, this.state.product).then(response => {
                window.alert("Produto atualizado com sucesso!");
            });
        } else {
            axios.post(`https://localhost:5001/products`, this.state.product).then(response => {
                window.alert("Produto adicionado com sucesso!");
            })
        }
    }

    //funciona :)
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
        return (
            <div>
                {/* Na header dessa página coloca um botão pra poder voltar pra página anterior */}
                <Header />
                <div className="container">
                    <h2 className="titulo">Add/update product</h2>
                    {/* Se for mudar o input não esquece de colocar o value, name e id */}
                    {/* Tem q validar esse formulário, as instruções tão no documento com teu nome */}
                    <form className="form">
                        <label className="labels" htmlFor="name">Name:</label>
                        <input className="fields" value={this.state.product.name} onChange={this.onChange} name="name" id="name" type="text" placeholder="Name"></input>

                       
                            <label className="labels" htmlFor="price">Price:</label>
                            <input className="fields" value={this.state.product.price} onChange={this.onChange} name="price" id="price" type="number" placeholder="Price"></input>

                            <label className="labels" htmlFor="weight">Weight:</label>
                            <input className="fields" value={this.state.product.weight} onChange={this.onChange} name="weight" id="weight" type="number" placeholder="Weight"></input>

                        
                        <label className="labels" htmlFor="quantity">Quantity:</label>
                        <input className="fields" value={this.state.product.quantity} onChange={this.onChange} name="quantity" id="quantity" type="number" placeholder="Quantity"></input>

                        <label className="labels" htmlFor="lot">Lot:</label>
                        <input className="fields" value={this.state.product.lot} onChange={this.onChange} name="lot" id="lot" type="text" placeholder="Lot"></input>

                        <label className="labels" htmlFor="validity">Validity:</label>
                        <input className="fields" value={this.state.product.validity} onChange={this.onChange} name="validity" id="validity" type="datetime-local"></input>

                        <label className="labels" htmlFor="description">Description:</label>
                        <textarea className="fields" value={this.state.product.description} onChange={this.onChange} name="description" id="description" placeholder="Description"></textarea>
                        <button className="button-save" onClick={this.save}>Save</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AddProduct;