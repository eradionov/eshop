import React from 'react';
import './cart-toggler.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartToggler = ({ toggleCartHidden }) => (
    <button className="dropdown-toggle cart-component" data-toggle="dropdown" aria-expanded="true" onClick={ toggleCartHidden }>
        <i className="fa fa-shopping-cart"></i>
        <span>Your Cart</span>
        <div className="qty">0</div>
    </button>
);

const mapDispatchStateToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchStateToProps)(CartToggler)