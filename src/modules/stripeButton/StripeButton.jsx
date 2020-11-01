import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import C from './constants';
import U from './utils';

const StripeButton = ({ price }) => {
  const handleToken = token => {
    console.log(token);
    // eslint-disable-next-line no-undef
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={U.getPriceForStripe(price)}
      panelLabel="Pay Now"
      token={handleToken}
      stripeKey={C.API_KEY}
    />
  );
};

export default StripeButton;
