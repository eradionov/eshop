import React from 'react';
import './custom-button.scss';

export const CustomButton = ({ children, isGoogleSignIn, className, ...otherProps }) => (
    <button className={ `${isGoogleSignIn ? 'custom-signin pull-right' : '' } ${className ? [].concat(className).join(' ') : ''} custom-button` } { ...otherProps }>{ children }</button>
);