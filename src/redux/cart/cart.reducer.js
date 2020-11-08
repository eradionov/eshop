import { cartActionTypes } from './cart.types';
import { addCartItem, removeCartItemQuantity } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    subTotals: null
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
    let items = [];

    switch (action.type) {
        case cartActionTypes.CART_VISIBILITY:
            return {
                ...currentState,
                hidden: !currentState.hidden
            }
        case cartActionTypes.ADD_CART_ITEM:
            items = addCartItem(currentState.cartItems, action.payload);

            return {
                ...currentState,
                cartItems: items
            };
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...currentState,
                cartItems: currentState.cartItems.filter(item => item.id !== action.payload.id)
            };
        case cartActionTypes.REMOVE_CART_ITEM_QUANTITY:
            return {
                ...currentState,
                cartItems: removeCartItemQuantity(currentState.cartItems, action.payload)
            };
        default:
            return currentState;
    }
};

export default cartReducer;