import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const MenuItem = ({grid, title, imageURL}) => {
    const classes = useStyles();
    return (
        <Grid item xs={grid}>
            <Paper
                variant="outlined"
                square
                className={classes.paper}
                style={{backgroundImage: `url(${imageURL})`}}
            />
        </Grid>
    );
};

export default MenuItem;
