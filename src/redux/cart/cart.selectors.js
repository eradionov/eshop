import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const cartItemCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatorQuantity, {quantity}) => accumulatorQuantity + quantity, 0)
);

export const isCartVisible = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const cartSubtotalsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatorPrice, {price, quantity}) => accumulatorPrice + price * quantity, 0)
);