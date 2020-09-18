import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import Item from '../item';

const Dropdown = ({
  anchorEl,
  cartVisible,
  toggleCartVisibility,
  cartItems,
}) => {
  const classes = useStyles();
  console.log(cartItems);
  return (
    <Menu
      id="cart_menu"
      anchorEl={anchorEl}
      keepMounted
      open={cartVisible}
      onClose={toggleCartVisibility}
    >
      {cartItems.map(cartItem => (
        <MenuItem key={cartItem.id} onClick={toggleCartVisibility}>
          <Item {...cartItem} />
        </MenuItem>
      ))}
      <div className={classes.checkoutBtnContainer}>
        <Button variant="outlined" color="primary" size="large" fullWidth>
          GO TO CHECKOUT
        </Button>
      </div>
    </Menu>
  );
};

export default Dropdown;
