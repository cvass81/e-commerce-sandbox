import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './styles';
import Paper from '../../../../modules/paper';

const Item = ({ grid, title, imageURL, linkURL }) => {
  const classes = useStyles();

  return (
    <Grid item xs={grid}>
      <Link underline="none" component={RouterLink} to={linkURL}>
        <Paper className={classes.wrapper}>
          <div
            className={classes.bg}
            style={{ backgroundImage: `url(${imageURL})` }}
          />
          <Paper className={classes.content}>
            <Typography component="h2" variant="h5" align="center">
              {title}
            </Typography>
            <Typography variant="subtitle1" align="center">
              SHOP NOW
            </Typography>
          </Paper>
        </Paper>
      </Link>
    </Grid>
  );
};

export default Item;
