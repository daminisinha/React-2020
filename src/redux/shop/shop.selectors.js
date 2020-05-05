import {createSelector} from 'reselect'; 


const selectShop = state => state.shop;

export const createShopSelection = createSelector(
    [selectShop],
    shop => shop.collections

);

export const selectCollectionForPreview = createSelector(
    [createShopSelection],
    collections => Object.keys(collections).map(key=> collections[key])

)
export const selectCollection = collectionUrlParam => createSelector(
    [createShopSelection],
    collections => collections[collectionUrlParam]

);



