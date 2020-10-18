import React from 'react';
import TextField from '@material-ui/core/TextField';

const QuantityField = ({
  handleRemoveItem,
  changeItemQuantity,
  cartItem,
  quantity,
}) => {
  const handleItemQuantityChange = (e, cartItem) => {
    if (+e.target.value < 0) {
      return;
    }
    if (+e.target.value === 0) {
      handleRemoveItem(cartItem);
    } else {
      changeItemQuantity({
        item: cartItem,
        quantity: +e.target.value,
      });
    }
  };

  return (
    <TextField
      type="number"
      min={0}
      value={quantity}
      onChange={e => handleItemQuantityChange(e, cartItem)}
    />
  );
};

export default QuantityField;
