import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectorCartItems } from "../../redux/cart/cart.selectors";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push("/checkout");
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = state => {
  console.log("Im being called from CartDropDown");
  return {
    cartItems: selectorCartItems(state)
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
