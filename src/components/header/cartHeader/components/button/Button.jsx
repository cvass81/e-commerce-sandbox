import React from 'react';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';
import { ShoppingIcon } from '../../../../../svgs';
import { toggleCartVisibility } from '../../../../../redux/cart';

const Button = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const handleClick = () => dispatch(toggleCartVisibility());

  return (
    <>
      <IconButton
        ref={ref}
        aria-controls="cart_menu"
        aria-haspopup="true"
        className={classes.cartButton}
        onClick={handleClick}
      >
        <ShoppingIcon />
        <Typography variant="caption" className={classes.cartAmount}>
          0
        </Typography>
      </IconButton>
    </>
  );
});

export default Button;
