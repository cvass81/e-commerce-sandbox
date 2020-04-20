import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import * as C from './constants';
import CollectionPreview from './collectionPreview';

const Shop = () => (
    <Container>
        <Typography component="h2" variant="h2" gutterBottom>
            Collections
        </Typography>
        <Grid container direction="column" wrap="nowrap" spacing={3}>
            {Object.keys(C).map(previewKey => (
                <Grid item key={previewKey}>
                    <CollectionPreview {...C[previewKey]} />
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default Shop;
