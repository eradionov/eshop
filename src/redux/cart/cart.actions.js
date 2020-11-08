import { cartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.CART_VISIBILITY
});

export const addCartItem = (item) => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const removeCartItem = (item) => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
});

export const removeCartItemQuantity = (item) => ({
    type: cartActionTypes.REMOVE_CART_ITEM_QUANTITY,
    payload: item
});