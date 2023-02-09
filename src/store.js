import { legacy_createStore } from "redux";
import rootReducers from './reducers';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig={
    key:'persist-store',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = legacy_createStore(persistedReducer, window._REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export const persistor = persistStore(store)
export default store;