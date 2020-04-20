import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Item from './item';

const CollectionPreview = ({ title, itemsOnGrid, items }) => (
    <div>
        <Typography component="h3" variant="h3" gutterBottom>
            {title}
        </Typography>
        <Grid container spacing={2}>
            {items
                .filter((item, index) => index < itemsOnGrid)
                .map(({ id, ...otherItemProps }) => {
                    const col = 12 / itemsOnGrid;
                    return (
                        <Grid item md={col} sm={col * 2} xs={12} key={id}>
                            <Item {...otherItemProps} />
                        </Grid>
                    );
                })}
        </Grid>
    </div>
);

export default CollectionPreview;
