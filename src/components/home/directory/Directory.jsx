import React from 'react';
import Grid from '@material-ui/core/Grid';
import Item from './item';
import withDirectory from '../../../hocs/withSections';

const Directory = ({ sections }) => (
  <Grid container spacing={2}>
    {sections.map(itemProps => (
      <Item key={itemProps.id} {...itemProps} />
    ))}
  </Grid>
);

export default withDirectory(Directory);
