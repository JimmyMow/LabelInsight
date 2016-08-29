import { createStore, applyMiddleware, combineReducers } from 'redux'
import rootReducer from '../reducers'
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-localstorage'

export default function configureStore(preloadedState) {
   const reducer = storage.reducer(rootReducer);

   const engine = createEngine('labelInsight');

   const middleware = storage.createMiddleware(engine);

   const createStoreWithMiddleware = applyMiddleware(middleware)(createStore);

   const store = createStoreWithMiddleware(reducer);

   const load = storage.createLoader(engine);

   load(store)
    .then((newState) => console.log('Loaded state:', newState))
    .catch(() => console.log('Failed to load previous state'));

   return store
}
