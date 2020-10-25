import React from 'react';
import { removeCartItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import Currency from 'react-currency-formatter';

import './cart.scss';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
    render() {
        const {subTotals = {}} = this.props;

        return(
            <div className="cart">
                <div className="cart-list">
                    <div className="product-widget">
                        <div className="product-img">
                            <img src="./img/product01.png" alt=""/>
                        </div>
                        <div className="product-body">
                            <h3 className="product-name"><a href="/">product name goes here</a></h3>
                            <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                        </div>
                        <button className="delete"><i className="fa fa-close"></i></button>
                    </div>

                    <div className="product-widget">
                        <div className="product-img">
                            <img src="./img/product02.png" alt=""/>
                        </div>
                        <div className="product-body">
                            <h3 className="product-name"><a href="/">product name goes here</a></h3>
                            <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                        </div>
                        <button className="delete" onClick={() => removeCartItem(this.props.cartItem)}><i className="fa fa-close"></i></button>
                    </div>
                </div>
                <div className="cart-summary">
                    <small>{subTotals.count} Item(s) selected</small>
                    <h5>SUBTOTAL:&nbsp; 
                    <Currency
                        quantity = {subTotals.price}
                        currency = {subTotals.currency}
                        decimal=","
                        group="."
                    /></h5>
                </div>
                <div className="cart-btns">
                    <Link to="/view-cart">View Cart</Link>
                    <Link to="/checkout">Checkout  <i className="fa fa-arrow-circle-right"></i></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartVisibility.cartItems,
    subTotals: state.cartVisibility.subTotals
});

const dispatchPropsAsMap = dispatch => ({
    removeCartItem: item => dispatch(removeCartItem(item))
});

export default connect(mapStateToProps, dispatchPropsAsMap)(Cart);