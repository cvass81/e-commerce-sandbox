import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const ClearButton = ({ handleRemoveItem, cartItem }) => (
  <IconButton aria-label="delete" onClick={() => handleRemoveItem(cartItem)}>
    <DeleteIcon fontSize="small" />
  </IconButton>
);

export default ClearButton;
