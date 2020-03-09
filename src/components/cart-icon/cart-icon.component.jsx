import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/11.2 shopping-bag.svg.svg";
import "./cart-icon.styles.scss";

import { selectorCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => {
  console.log("Im being called from CartIcon");
  return {
    itemCount: selectorCartItemsCount(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
