import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Item from './Item';
import useStyles from './styles';

const DropdownContent = ({
  cartItems,
  cartItemsCount,
  toggleCartVisibility,
}) => {
  const classes = useStyles();
  if (!cartItemsCount) {
    return (
      <div className={classes.emptyCartContainer}>
        <MenuItem className={classes.emptyCartFiller}>
          <Item />
        </MenuItem>
        <Typography gutterBottom className={classes.emptyCart}>
          Your cart is empty
        </Typography>
      </div>
    );
  }

  return cartItems.map(cartItem => (
    <MenuItem key={cartItem.id} onClick={toggleCartVisibility}>
      <Item {...cartItem} />
    </MenuItem>
  ));
};

export default DropdownContent;
