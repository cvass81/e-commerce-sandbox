import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import { ShoppingIcon } from '../../../../../svgs';

const CartButton = ({ toggleCartVisibility }) => {
  const classes = useStyles();

  return (
    <>
      <IconButton
        aria-controls="cart_menu"
        aria-haspopup="true"
        className={classes.cartButton}
        onClick={toggleCartVisibility}
      >
        <ShoppingIcon />
        <Typography variant="caption" className={classes.cartAmount}>
          0
        </Typography>
      </IconButton>
    </>
  );
};

export default CartButton;
