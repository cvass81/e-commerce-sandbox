import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { CrownIcon } from '../../svgs';
import LoginButton from './loginButton';
import useStyles from './styles.js';
import CartHeader from './cartHeader';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      color="transparent"
      position="static"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography component={Link} variant="h1" to="/">
              <CrownIcon fontSize="inherit" />
            </Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/shop">
              SHOP
            </Button>
          </Grid>
          <Grid item>
            <LoginButton />
          </Grid>
          <Grid item>
            <CartHeader />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
