import React from 'react';
import CartToggler from '../cart-toggler/cart-toggler.component';
import { connect } from 'react-redux';
import Cart from '../cart/cart.component';

import './cart-dropdown.scss';

class CartDropdown extends React.Component {
    render() {
        return (
            <div className="col-md-3 clearfix pull-right">
                <div className="header-ctn">
                    <CartToggler/>
                    { this.props.cartVisibility === false ? <Cart/> : null }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartVisibility: state.cartVisibility.hidden
});

export default connect(mapStateToProps)(CartDropdown)