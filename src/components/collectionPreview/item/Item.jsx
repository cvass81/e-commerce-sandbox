import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

const Item = ({name, price, imageUrl}) => {
    const classes = useStyles();
    return (
        <>
            <Paper
                elevation={0}
                square
                className={classes.wrapper}
            >
                <div
                    className={classes.bg}
                    style={{backgroundImage: `url(${imageUrl})`}}
                />
                <Button
                    variant="contained"
                    size="large"
                    elevation={1}
                    fullWidth
                    className={classes.button}
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

export default Item;
