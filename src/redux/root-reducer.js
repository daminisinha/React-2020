import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';


//windows.localStorage
import storage from 'redux-persist/lib/storage';

// import sessionStorage for windows.sessionStorage
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//we won't persist user reducer as it is taken care by firebase
const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers(
        {
            user: userReducer, 
            cart: cartReducer,
            directory:directoryReducer,
            shop:shopReducer
        }
    )


export default persistReducer(persistConfig,rootReducer);