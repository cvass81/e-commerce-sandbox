const addItemToCart = (cartItems, itemToAdd) => {
  const isExistingItem = cartItems.some(
    cartItem => cartItem.id === itemToAdd.id,
  );

  if (isExistingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...itemToAdd, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const clearItemFromCart = (cartItems, itemToClear) =>
  cartItems.filter(cartItem => cartItem.id !== itemToClear.id);

const changeItemQuantity = (cartItems, { item, quantity }) =>
  cartItems.map(cartItem =>
    cartItem.id === item.id ? { ...item, quantity } : cartItem,
  );
export default { addItemToCart, clearItemFromCart, changeItemQuantity };
