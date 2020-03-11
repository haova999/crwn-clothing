import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapShotToMap
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
  componentDidMount() {
    const {updateCollections} = this.props;

    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapShot => {
      convertCollectionsSnapShotToMap(snapShot);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsArr =>
    dispatch(updateCollections(collectionsArr))
});

export default ShopPage;
