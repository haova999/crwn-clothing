import { createSelector } from "reselect";

const selectorCart = state => state.cart;

export const selectorCartItems = createSelector(
  [selectorCart],
  cart => cart.cartItems
);

export const selectorCartItemsCount = createSelector(
  [selectorCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulated, cartItem) => accumulated + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectorCartItems], cartItems =>
  cartItems.reduce(
    (accumulated, cartItem) => accumulated + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectHidden = createSelector([selectorCart], cart => cart.hidden);
