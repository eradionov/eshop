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
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1 }];
};