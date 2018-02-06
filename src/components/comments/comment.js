import React from 'react';
import './comment.css';

export default class Comment extends React.Component {
  render = () => {
    const { data } = this.props;

    return (
      <div className="comment">
        <div>
          <b>{data.name}</b>
          {` ${data.time} ${data.date}`}
        </div>
        <div className="text">{data.text}</div>
      </div>
    );
  };
}
