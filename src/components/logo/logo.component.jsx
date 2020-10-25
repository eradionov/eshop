import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import './logo.scss';

export const Logo = () => (
    <div className="col-md-3">
        <div className="header-logo">
            <Link to="/" className="logo">
                <img src={logo} alt="Electro"/>
            </Link>
        </div>
    </div>
);