import React from 'react';
import CartToggler from '../cart-toggler/cart-toggler.component';
import { connect } from 'react-redux';
import Cart from '../cart/cart.component';
import { selectCartItems, isCartVisible } from '../../redux/cart/cart.selectors';

import './cart-dropdown.scss';
import { createStructuredSelector } from 'reselect';

class CartDropdown extends React.Component {
    render() {
        return (
            <div className="col-md-3 clearfix pull-right">
                <div className="header-ctn">
                    <CartToggler/>
                    { this.props.hidden === false ? <Cart/> : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    hidden: isCartVisible,
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown)