import React from 'react';
import Currency from 'react-currency-formatter';

const CartItem = ({item, currency}) => (
    <div className="product-widget">
        <div className="product-img">
            <img src={ item.imageUrl } alt=""/>
        </div>
        <div className="product-body">
            <h3 className="product-name">{ item.name }</h3>
            <h4 className="product-price"><span className="qty">{item.quantity}x</span>
            <Currency
                    quantity = {item.price}
                    currency = {currency}
                    decimal=","
                    group="."
                />
            </h4>
        </div>
    </div>
);

export default CartItem;