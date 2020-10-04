import React from 'react';
import classNames from 'classnames';
import nextId from "react-id-generator";
import './rating.scss';

export const Rating = ({rating = 0}) => (
    <div className="product-rating">
        { Array.from(Array(Math.floor(rating))).map((index) => 
            <i key = {nextId()} className={ classNames('fa', 'fa-star') }></i>)
        }

        { Array.from(Array(Math.floor(rating % 2))).map((index) => 
            <i key = {nextId()} className={ classNames('fa', 'fa-star-half-o') }></i>)
        }
    </div>
)