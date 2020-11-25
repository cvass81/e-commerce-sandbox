import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Collection from '../../../modules/collection/Collection';
import withShopData from '../../../hocs/withShopData';
import withSpinner from '../../../hocs/withSpinner';

const CollectionsPreview = ({ collections }) => (
  <>
    <Typography component="h2" variant="h2" gutterBottom>
      Collections
    </Typography>
    <Grid container direction="column" wrap="nowrap" spacing={3}>
      {Object.keys(collections).map(collectionKey => (
        <Grid item key={collectionKey}>
          <Collection isPreview {...collections[collectionKey]} />
        </Grid>
      ))}
    </Grid>
  </>
);

export default withSpinner(withShopData(CollectionsPreview));
