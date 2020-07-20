import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { addItem } from '../../../../redux/cart';

const Item = ({ item, addItemToCart }) => {
  const classes = useStyles();
  const { name, price, imageUrl } = item;
  const handleClick = () => addItemToCart(item);

  return (
    <>
      <Paper elevation={0} square className={classes.wrapper}>
        <div
          className={classes.bg}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <Button
          variant="contained"
          size="large"
          elevation={1}
          fullWidth
          className={classes.button}
          onClick={handleClick}
        >
          ADD TO CART
        </Button>
      </Paper>
      <div className={classes.specifics}>
        <Typography>{name}</Typography>
        <Typography>{price}</Typography>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(Item);
