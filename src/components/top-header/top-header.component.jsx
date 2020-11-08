import React from 'react';
import './top-header.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectAuthenticatedUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const TopHeader = ({ currentUser }) => (
    <div id="top-header">
        <div className="container">
            <ul className="header-links pull-left">
                <li><a href="tel:375172554589"><i className="fa fa-phone"></i>+375172554589</a></li>
                <li><a href="mailto:testemail@test.com"><i className="fa fa-envelope-o"></i>testemail@test.com</a></li>
                <li><a href="http://maps.google.com/maps?q=VGRH+WJ Минск" target="_blank" rel="noopener noreferrer"><i className="fa fa-map-marker"></i>Test street 12</a></li>
            </ul>
            <ul className="header-links pull-right">
                <li>
                    {
                        currentUser
                        ? <span onClick = {() => auth.signOut()} className = "sign-out"><i className="fa fa-sign-out"></i>&nbsp;Sign Out</span>
                        : <Link to={{ pathname: '/sign-in' }}><i className = "fa fa-user-o"></i>&nbsp;Sign In</Link>
                    }
                </li>
			</ul>
        </div>
</div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectAuthenticatedUser
});

export default connect(mapStateToProps)(TopHeader);