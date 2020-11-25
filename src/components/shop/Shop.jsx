import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CollectionsPreview from './collectionsPreview';
import CategoryPage from './categoryPage';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/utils';
import withShopData from '../../hocs/withShopData';

const Shop = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      await updateCollections(convertCollectionsSnapshotToMap(snapshot));
      setIsLoading(false);
    });
  }, []);

  return (
    <Container>
      <Route
        exact
        path={match.path}
        render={props => (
          <CollectionsPreview isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => <CategoryPage isLoading={isLoading} {...props} />}
      />
    </Container>
  );
};

export default withShopData(Shop);
