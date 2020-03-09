export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // add a new item with quantity prop if it not exist in the array
  // return an array of cart-item object
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
};

// decrease quantity of item in cart
export const deleteItemFromCart = (cartItems, itemToDelete) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === itemToDelete.id
  );

  if (existingCartItem.quantity === 1) {
    return removeItemFromCart(cartItems, itemToDelete);
  }

  return cartItems.map(cartItem =>
    cartItem.id === itemToDelete.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
