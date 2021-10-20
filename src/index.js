import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';
import Error404 from './views/Error404';
import AddProduct from './views/AddProduct';

ReactDOM.render(
   <BrowserRouter>
      <Switch>
         <Route path="/" exact={true} component={App} />
         <Route path="/products" exact={true} component={Products} />
         <Route path='/product/new' component={AddProduct} />
         <Route path='/product/update/:id' component={AddProduct} />
         <Route path="/products/:id" component={ProductDetails} />
         <Route path="*" component={Error404} />
      </Switch>
   </BrowserRouter>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
