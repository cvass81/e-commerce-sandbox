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
                className={classes.wrapper}
            >
                <div
                    className={classes.bg}
                    style={{backgroundImage: `url(${imageURL})`}}
                />
                <Paper
                    variant="outlined"
                    square
                    className={classes.content}
                >
                    <Typography
                        component="h2"
                        variant="h5"
                        align="center"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                    >
                        SHOP NOW
                    </Typography>
                </Paper>
            </Paper>
        </Grid>
    );
};

export default MenuItem;
