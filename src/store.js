import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const presistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(presistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

export default store;
