import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as C from './constants';
import MenuItem from '../menuItem';

const Directory = () => (
    <Grid container spacing={2}>
    {Object.keys(C).map(itemKey => <MenuItem key={itemKey} {...C[itemKey]}/>)}
    </Grid>
);

export default Directory;
