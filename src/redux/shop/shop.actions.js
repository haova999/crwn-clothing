import ShopActionTypes from './shop.types';

export const updateCollections = collectionsArr => ({
   type : ShopActionTypes.UPDATE_COLLECTIONS,
   payload : collectionsArr
})