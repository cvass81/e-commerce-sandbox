import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CollectionsPreview from './collectionsPreview';
import CategoryPage from './categoryPage';
import withShopData from '../../hocs/withShopData';

const Shop = ({ match, isFetching, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, []);

  return (
    <Container>
      <Route
        exact
        path={match.path}
        render={props => (
          <CollectionsPreview isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => <CategoryPage isLoading={isFetching} {...props} />}
      />
    </Container>
  );
};

export default withShopData(Shop);
