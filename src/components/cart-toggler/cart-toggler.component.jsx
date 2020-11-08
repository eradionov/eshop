import React from 'react';
import './cart-toggler.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { cartItemCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartToggler = ({ toggleCartHidden, itemCount }) => (
    <button className="dropdown-toggle cart-component" data-toggle="dropdown" aria-expanded="true" onClick={ toggleCartHidden }>
        <i className="fa fa-shopping-cart"></i>
        <span>Your Cart</span>
        <div className="qty">{itemCount}</div>
    </button>
);

const mapDispatchStateToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: cartItemCount
});

export default connect(mapStateToProps, mapDispatchStateToProps)(CartToggler)