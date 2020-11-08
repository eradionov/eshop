import React from 'react';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { Logo } from '../logo/logo.component';
import TopHeader from '../top-header/top-header.component';


import './header.scss';

const Header = () => (
    <header>
        <TopHeader/>
        
        <div id="header">
            <div className="container">
                <div className="row">
                    <Logo/>
                    <CartDropdown/>
                </div>
            </div>
        </div>
    </header>
);


export default Header