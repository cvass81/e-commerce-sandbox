import React from 'react';
import { useHistory } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import DropdownContent from './DropdownContent';
import useStyles from './styles';

const Dropdown = ({
  anchorEl,
  cartVisible,
  cartItemsCount,
  toggleCartVisibility,
  cartItems,
}) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Menu
      id="cart_menu"
      anchorEl={anchorEl}
      keepMounted
      open={cartVisible}
      onClose={toggleCartVisibility}
    >
      <DropdownContent
        cartItems={cartItems}
        cartItemsCount={cartItemsCount}
        toggleCartVisibility={toggleCartVisibility}
      />
      <div className={classes.checkoutBtnContainer}>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          fullWidth
          onClick={() => {
            history.push('/checkout');
            toggleCartVisibility();
          }}
        >
          GO TO CHECKOUT
        </Button>
      </div>
    </Menu>
  );
};

export default Dropdown;
