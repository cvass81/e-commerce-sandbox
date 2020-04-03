import React from 'react';
import {
    Link as RouterLink,
    useRouteMatch,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import useStyles from './styles';

const Item = (
    {
        grid,
        title,
        imageURL,
        linkURL,
    }
) => {
    const classes = useStyles();
    const match = useRouteMatch(`/${linkURL}`);
    console.log(match);
    return (
        <Grid item xs={grid}>
            <Link
                underline="none"
                component={RouterLink}
                to={linkURL}
            >
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

export default Item;
