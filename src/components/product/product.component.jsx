import React from 'react';
import './product.scss';
import Currency from 'react-currency-formatter';
import { Rating } from '../rating/rating.component';
import { CustomButton } from '../custom-button/custom-button.component';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

const Product = ({product, addCartItem}) => (
    <div className="col-lg-4 col-md-6 col-xs-12">
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
                <p className="product-brand">{ product.brand }</p>
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
                <Rating rating={ product.stars }/>

                <div className="add-to-cart">
                    <CustomButton className="add-to-cart-btn" onClick={() => addCartItem(product)}><i className = "fa fa-shopping-cart"></i> Add to cart</CustomButton>
                </div>
            </div>
        </div>
    </div>
)

const dispatchPropsAsMap = dispatch => ({
    addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, dispatchPropsAsMap)(Product);