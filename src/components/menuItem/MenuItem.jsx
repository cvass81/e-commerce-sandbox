import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const MenuItem = ({grid, title, imageURL, linkURL}) => {
    const classes = useStyles();

    return (
        <Grid item xs={grid}>
            <Link className={classes.link} to={linkURL}>
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
            </Link>
        </Grid>
    );
};

export default MenuItem;
