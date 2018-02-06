import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';
import NewsFeed from './components/news_feed/news_feed';
import { get } from './utils';
import storeFactory from './store';

const store = storeFactory();

window.React = React;
window.store = store;
const newsList = get('news');
render(
  <Provider store={store}>
    <NewsFeed newsList={newsList} />
  </Provider>,
  document.getElementById('page'),
);
