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

export default { addItemToCart };
