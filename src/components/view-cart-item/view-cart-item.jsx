import React from 'react';
import Currency from 'react-currency-formatter';
import { addCartItem, removeCartItem, removeCartItemQuantity } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

import './view-cart-item.scss';

const ViewCartItem = ({cartItem, currency, removeItem, addItem, removeItemQuantity}) =>{
    const {name, summary, imageUrl, price, quantity} = cartItem;

    return (
        <div className="basket col-xs-12">
            <div className="basket-product">
                <div className="item col-xs-6">
                    <div className="product-image">
                        <img src={imageUrl} alt={name} className="product-frame"/>
                    </div>
                    <div className="product-details">
                        <h1>{name}</h1>
                        <p>{summary}</p>
                    </div>
                </div>
                <div className="price text-center col-xs-2">
                    <Currency
                        quantity = {price}
                        currency = {currency}
                        decimal=","
                        group="."
                    />
                </div>
                <div className="quantity col-xs-2">
                    <div className="quantity-item">
                        <div className="arrow" onClick={() => removeItemQuantity(cartItem)}>&#10094;</div>
                        <span className="quantity-item-value">{quantity}</span>
                        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                    </div>
                </div>
                <div className="remove col-xs-2">
                    <span className="remove-item" onClick={() => removeItem(cartItem)}>&#10005;</span>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeCartItem(item)),
    addItem: item => dispatch(addCartItem(item)),
    removeItemQuantity: item => dispatch(removeCartItemQuantity(item))
});

export default connect(null, mapDispatchToProps)(ViewCartItem);