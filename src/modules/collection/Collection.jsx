import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Item from './item';

const Collection = ({ title, itemsOnGrid, items, isPreview }) => (
  <div>
    <Typography
      component="h3"
      variant="h3"
      gutterBottom
      align={isPreview ? 'left' : 'center'}
    >
      {title}
    </Typography>
    <Grid container spacing={2}>
      {items
        .filter((item, index) => !isPreview || index < itemsOnGrid)
        .map(({ id, ...otherItemProps }) => {
          const col = 12 / itemsOnGrid;
          return (
            <Grid item md={col} sm={col * 2} xs={12} key={id}>
              <Item item={{ id, ...otherItemProps }} />
            </Grid>
          );
        })}
    </Grid>
  </div>
);

Collection.propTypes = {
  isPreview: PropTypes.bool,
};

Collection.defaultProps = {
  isPreview: false,
};

export default Collection;
