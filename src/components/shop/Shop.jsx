import React from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CollectionsPreview from './collectionsPreview';
import CategoryPage from './categoryPage';

const Shop = ({ match }) => (
  <Container>
    <Route exact path={match.path} component={CollectionsPreview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </Container>
);

export default Shop;
