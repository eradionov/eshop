import React from 'react';
import { Product } from '../product/product.component';

export class Products extends React.Component {
    constructor() {
        super();

        this.state = {
            catalog: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/store/products.json')
          .then(response => response.json())
          .then(catalog => this.setState({ catalog: catalog }))
    }

    render() {
        return (
            <div className="row">
                { this.state.catalog?.category && <h1 className="col-lg-12 col-md-12 col-xs-12 product-category">{ this.state.catalog?.category }</h1>}
                {this.state.catalog?.products?.map(product => <Product key = { product.id } product = { product }/>)}
            </div>
        )
    }
}
