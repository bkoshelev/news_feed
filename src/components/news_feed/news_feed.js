import React from 'react';
import Header from './header';
import { FeedConnect } from '../../containers';
import './news_feed.css';

export default class NewsFeed extends React.Component {
  render = () => (
    <div id="news_feed">
      <Header />
      <FeedConnect newsList={this.props.newsList} />
    </div>
  );
}
