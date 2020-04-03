import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as C from './constants';
import Item from './item';

const Directory = () => (
    <Grid container spacing={2}>
    {Object.keys(C).map(itemKey => <Item key={itemKey} {...C[itemKey]}/>)}
    </Grid>
);

export default Directory;
