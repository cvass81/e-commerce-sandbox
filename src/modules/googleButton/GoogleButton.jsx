import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles.js';

const GoogleButton = (props) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.googleButton}
            {...props}
        />
    );
};

export default GoogleButton;
