import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ggDNnmlLmk9TsB9uKcJQL0pw00QUtexziD";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      name="CRWN CLOTHING Ltd."
      image="https://sendeyo.com/up/d/f3eb2117da"
      amount={priceForStripe}
      stripeKey={publishableKey}
      token={onToken}
      panelLabel={`Pay now`}
      billingAddress
      shippingAddress
    />
  );
};

export default StripeButton;