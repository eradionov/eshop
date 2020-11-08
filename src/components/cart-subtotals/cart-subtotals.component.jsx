import React from 'react';
import { cartSubtotalsCount, cartItemCount } from '../../redux/cart/cart.selectors';
import Currency from 'react-currency-formatter';
import { connect } from 'react-redux';

const CartSubTotals = ({cartSubtotals, itemsCount, currency}) => (
    <div className="cart-summary">
        <small>{ itemsCount } Item(s) selected</small>
        <h5>TOTAL:&nbsp;
            <Currency
                quantity = {cartSubtotals}
                currency = {currency}
                decimal=","
                group="."
            />
        </h5>
    </div>
);

const mapStateToProps = state => ({
    cartSubtotals: cartSubtotalsCount(state),
    itemsCount: cartItemCount(state)
});

export default connect(mapStateToProps)(CartSubTotals)
