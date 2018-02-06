import React from 'react';
import Comment from './comment';
import './comments.css';

export default class Comments extends React.Component {
  getComments = () => {
    const feed = this.props.comments.map((comment, index) => (
      <Comment key={index} data={comment} />
    ));

    return feed;
  };

  render = () => {
    const comments = this.getComments();

    return <div id="comments">{comments}</div>;
  };
}
