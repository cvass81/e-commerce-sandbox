import React from 'react';
import withShopData from '../../../hocs/withShopData';
import Collection from '../../../modules/collection/Collection';
import withSpinner from '../../../hocs/withSpinner';

const CategoryPage = ({ collections, match }) => {
  console.log(collections[match.params.categoryId]);
  if (!Object.keys(collections).length) {
    return null;
  }
  return <Collection {...collections[match.params.categoryId]} />;
};

export default withSpinner(withShopData(CategoryPage));
