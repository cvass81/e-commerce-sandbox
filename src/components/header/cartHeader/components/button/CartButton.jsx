import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import { ShoppingIcon } from '../../../../../svgs';
import withCart from '../../../../../hocs/withCart';

const CartButton = ({ cartItemsCount, toggleCartVisibility }) => {
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
          {cartItemsCount}
        </Typography>
      </IconButton>
    </>
  );
};

export default withCart(CartButton);
