import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CartSubTotals from '../cart-subtotals/cart-subtotals.component';
import { createStructuredSelector } from 'reselect';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import { withRouter } from "react-router";

import './cart.scss';
import { CustomButton } from '../custom-button/custom-button.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

class Cart extends React.Component {
    buttonAction(path) {
        this.props.history.push(path);
        this.props.dispatch(toggleCartHidden());
    }

    render() {
        const {cartItems} = this.props;

        if (cartItems.length === 0) {
            return (
                <div className="cart">
                    <div className="cart-list">
                        <h4 className="text-center">Your cart is empty.</h4>
                    </div>
                </div>
            );
        }

        return(
            <div className="cart">
                <div className="cart-list">
                    {cartItems?.map(item => <CartItem key = { item.id } item = { item }/>)}
                </div>
                <CartSubTotals/>
                <div className="cart-btns">
                    <CustomButton onClick={() => this.buttonAction('/view-cart')}>View Cart&nbsp;<i className="fa fa-arrow-circle-right"></i></CustomButton>
                    <CustomButton className="checkout-btn" onClick={() => this.buttonAction('/checkout')}>Checkout&nbsp;<i className="fa fa-shopping-cart"></i></CustomButton>

                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));