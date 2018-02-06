import React from 'react';
import './news_header.css';

export default class NewsHeader extends React.Component {
  render = () => (
    <div className="text_header">
      <b>{this.props.text}</b>
    </div>
  );
}
