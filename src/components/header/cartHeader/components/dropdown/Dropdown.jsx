import React from 'react';
import { connect } from 'react-redux';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import { toggleCartVisibility } from '../../../../../redux/cart';

const Dropdown = ({ anchorEl, cartVisible, toggleCartVisibility }) => {
  const classes = useStyles();

  return (
    <Menu
      id="cart_menu"
      anchorEl={anchorEl}
      keepMounted
      open={cartVisible}
      onClose={toggleCartVisibility}
    >
      <MenuItem onClick={toggleCartVisibility}>Profile</MenuItem>
      <MenuItem onClick={toggleCartVisibility}>My account</MenuItem>
      <MenuItem onClick={toggleCartVisibility}>Logout</MenuItem>
      <div className={classes.checkoutBtnContainer}>
        <Button variant="outlined" color="primary" size="large" fullWidth>
          GO TO CHECKOUT
        </Button>
      </div>
    </Menu>
  );
};

const mapStateToProps = state => ({
  cartVisible: state.cart.cartVisible,
});

const mapDispatchToProps = dispatch => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
