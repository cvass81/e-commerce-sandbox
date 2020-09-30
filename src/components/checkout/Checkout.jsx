import React from 'react';
import cx from 'classnames';
import Container from '@material-ui/core/Container';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import C from './constants';
import useStyles from './styles';

const Checkout = ({ cartItems, cartItemsTotalValue }) => {
  const classes = useStyles();
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
            {cartItems.map(({ id, name, imageUrl, price, quantity }) => (
              <TableRow key={id}>
                <TableCell>
                  <img alt={name} src={imageUrl} className={classes.image} />
                </TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{quantity}</TableCell>
                <TableCell>{`$${price}`}</TableCell>
                <TableCell>
                  <IconButton aria-label="delete">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography
        className={classes.total}
        align="right"
        variant="h3"
        component="p"
      >
        {`TOTAL: $${cartItemsTotalValue}`}
      </Typography>
    </Container>
  );
};

export default Checkout;
