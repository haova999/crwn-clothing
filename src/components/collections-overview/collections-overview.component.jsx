import React from "react";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import { selectShopCollectionForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <CollectionPreview key={id} {...otherCollectionProps} />;
    })}
  </div>
);

const mapStateToProps = state => ({
  collections: selectShopCollectionForPreview(state)
});

export default connect(mapStateToProps)(CollectionOverview);
