import React from 'react';
import { CustomButton } from '../../components/custom-button/custom-button.component';

import { withRouter } from "react-router";
import { connect } from 'react-redux';
import {selectCartItems, cartSubtotalsCount} from '../../redux/cart/cart.selectors';
import Currency from 'react-currency-formatter';

import './view-cart.styles.scss';
import { createStructuredSelector } from 'reselect';
import ViewCartItem from '../../components/view-cart-item/view-cart-item';

const ViewCart = ({cartItems, currency, subTotals}) => (
    <main className="checkout-page row">
        {cartItems.map(item => <ViewCartItem key = {item.id} cartItem ={item}/>)}

        <div className="row-basket-total">
            <div className="basket-totals pull-left">
                <span className="total-label">Total:&nbsp;</span><span className="total-price">
                <Currency
                        quantity = {subTotals}
                        currency = {currency}
                        decimal=","
                        group="."
                    />
                </span>
            </div>
            <CustomButton className="checkout-button pull-right">Checkout</CustomButton>
        </div>
  </main>

);

const mapStateToProps = createStructuredSelector({
    subTotals: cartSubtotalsCount,
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(ViewCart));