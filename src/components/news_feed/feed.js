import React from 'react';
import { NewNewsConnect } from '../../containers';
import './feed.css';

export default class Feed extends React.Component {
  getFeed = () => {
    const feed = this.props.newsList.map((news, index) => (
      <NewNewsConnect key={index} data={news} />
    ));

    return feed;
  };

  componentWillMount() {
    const newNewsList = this.props.newsList.map(news => ({
      id: news.id,
      isOpenText: false,
      isOpenComments: false,
    }));
    this.props.createNewsList(newNewsList);
  }
  render = () => {
    const feed = this.getFeed();

    return <div id="feed">{feed}</div>;
  };
}
