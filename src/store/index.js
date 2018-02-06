import { createStore, combineReducers, applyMiddleware } from 'redux';
import newsList from './reducers';
import stateData from './../data/state';

const storeFactory = () =>
  applyMiddleware()(createStore)(
    combineReducers({ newsList }),
    stateData,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default storeFactory;
