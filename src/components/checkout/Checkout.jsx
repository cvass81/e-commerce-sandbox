import React from 'react';
import compose from 'lodash/fp/compose';
import cx from 'classnames';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import C from './constants';
import useStyles from './styles';
import withDialog from '../../hocs/withDialog/withDialog';
import ClearButton from './clearButton';
import QuantityField from './quantityField';
import StripeButton from '../../modules/stripeButton';
import withCart from '../../hocs/withCart';

const Checkout = ({
  cartItems,
  cartItemsTotalValue,
  clearItemFromCart,
  changeItemQuantity,
  showDialog,
}) => {
  const classes = useStyles();

  const handleRemoveItem = cartItem =>
    showDialog({
      title: `Remove ${cartItem.name} from Cart`,
      text: 'Are you sure?',
      action: () => clearItemFromCart(cartItem),
    });

  return (
    <Container maxWidth="md">
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              {Object.keys(C.TABLE_HEADERS).map((key, index, array) => (
                <TableCell
                  key={key}
                  className={cx(classes.col, {
                    [classes.minWidthCol]: index === array.length - 1,
                  })}
                >
                  {C.TABLE_HEADERS[key]}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(cartItem => {
              const { id, name, imageUrl, price, quantity } = cartItem;
              return (
                <TableRow key={id}>
                  <TableCell>
                    <img alt={name} src={imageUrl} className={classes.image} />
                  </TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>
                    <QuantityField
                      changeItemQuantity={changeItemQuantity}
                      handleRemoveItem={handleRemoveItem}
                      cartItem={cartItem}
                      quantity={quantity}
                    />
                  </TableCell>
                  <TableCell>{`$${price}`}</TableCell>
                  <TableCell>
                    <ClearButton
                      handleRemoveItem={handleRemoveItem}
                      cartItem={cartItem}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        className={classes.total}
        align="right"
        variant="h3"
        component="p"
        gutterBottom
      >
        {`TOTAL: $${cartItemsTotalValue}`}
      </Typography>
      <Grid container justify="flex-end">
        <Grid item>
          <StripeButton price={cartItemsTotalValue} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default compose(withCart, withDialog)(Checkout);
