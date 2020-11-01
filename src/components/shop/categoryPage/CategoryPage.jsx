import React from 'react';
import withShopData from '../../../hocs/withShopData';
import Collection from '../../../modules/collection/Collection';

const CategoryPage = ({ collections, match }) => (
  <Collection {...collections[match.params.categoryId]} />
);

export default withShopData(CategoryPage);
