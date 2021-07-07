import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import playerIds from './playerIds';
import players from './players';

const reducers = {
  playerIds,
  players,
};

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
