import React from 'react';
import './product.scss';
import classNames from 'classnames';
import Currency from 'react-currency-formatter';
import { Rating } from '../rating/rating.component';
import { Link } from 'react-router-dom';

export const Product = ({product}) => (
    <div className={ classNames('col-lg-4', 'col-md-6', 'col-xs-12') }>
        <div className="product">
            <Link to={product.uri}>
                <div className="product-img">
                    <img src={ product.imageUrl } alt=""/>
                    <div className="product-label">
                        { product.discount ? <span className="sale">{ product.discount }</span> : '' }
                        { product.isNew ? <span className="new">NEW</span> : '' }
                    </div>
                </div>
            </Link>
            <div className="product-body">
                <Rating rating={product.stars}/>
                <h3 className="product-name"><Link to={product.uri}>{ product.name }</Link></h3>
                <span className="product-summary">{ product.summary }</span>
                <h4 className="product-price">
                    <Currency
                        quantity = {product.price}
                        currency = {product.currency}
                        decimal=","
                        group="."
                    />
                    {product.oldPrice
                        ? <del className="product-old-price">
                            <Currency
                                quantity = {product.oldPrice}
                                currency = {product.currency}
                                decimal=","
                                group="."/>
                            </del>
                        : ''
                    }
                </h4>

                <div className="add-to-cart">
                    <button className="add-to-cart-btn"><i className={ classNames('fa', 'fa-shopping-cart') }></i> add to cart</button>
                </div>
            </div>
        </div>
    </div>
)