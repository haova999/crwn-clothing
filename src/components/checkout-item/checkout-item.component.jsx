import React from "react";
import { connect } from "react-redux";

import { removeItem, addItem, deleteItem } from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeItem, addItem, deleteItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={() => deleteItem(cartItem)}>
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  deleteItem: cartItem => dispatch(deleteItem(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
