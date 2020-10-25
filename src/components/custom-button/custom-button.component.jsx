import React from 'react';
import './custom-button.scss';

export const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={ `${isGoogleSignIn ? 'custom-signin pull-right' : '' } custom-button` } { ...otherProps }>{ children }</button>
);