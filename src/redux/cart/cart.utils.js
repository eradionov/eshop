export  const countSubTotals = (items) => {
    let subTotals = null;

    items.forEach(item => {
        if (subTotals) {
            subTotals.price += item.price;
            ++subTotals.count;
        } else {
            subTotals = {
                price: item.price,
                count: 1,
                currency: item.currency
            };
        }

    });

    return subTotals;
}

export const addCartItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(item => 
            item.id === cartItemToAdd.id
            ? { ...item, quantity: ++item.quantity }
            : item
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
};

export const removeCartItemQuantity = (cartItems, cartItemToReduce) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToReduce.id);

    if (!existingCartItem) {
        return;
    }

    if (existingCartItem.quantity > 1) {
        return cartItems.map(item => 
            item.id === cartItemToReduce.id
            ? { ...item, quantity: --item.quantity }
            : item
        )
    }

    return removeCartItem(cartItems, cartItemToReduce);
};