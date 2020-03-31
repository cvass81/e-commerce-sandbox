import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as C from './constants';
import MenuItem from '../menuItem';

const DirectoryMenu = () => (
    <Grid container spacing={2}>
    {Object.keys(C).map(item => <MenuItem {...C[item]}/>)}
    </Grid>
);

export default DirectoryMenu;
