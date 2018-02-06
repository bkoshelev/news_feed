import React from 'react';
import './news_text.css';

export default class NewsText extends React.Component {
  render = () => <div className="news_text text">{this.props.text}</div>;
}
