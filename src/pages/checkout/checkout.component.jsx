import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";
import {
  selectorCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripe-button/stripe-button.component";

const CheckOutPage = ({ cartItems, totalPrice }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>Total : ${totalPrice}</span>
    </div>

    <StripeButton price={totalPrice} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectorCartItems,
  totalPrice: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
