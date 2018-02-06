import React from 'react';
import NewsHeader from './news_header';
import NewsText from './news_text';
import Comments from './../comments/comments';
import './new_news.css';

export default class NewNews extends React.Component {
  openCloseText = () => {
    const oldNewsData = this.props.currentNewsList[this.props.data.id];

    this.props.updateNews({
      id: this.props.data.id,
      isOpenText: !oldNewsData.isOpenText,
    });
  };

  openCloseComments = () => {
    const oldNewsData = this.props.currentNewsList[this.props.data.id];

    this.props.updateNews({
      id: this.props.data.id,
      isOpenComments: !oldNewsData.isOpenComments,
    });
  };

  getComments = () => <Comments comments={this.props.data.comments} />;

  render = () => {
    const { data } = this.props;
    const stateData = this.props.currentNewsList[data.id];
    const { isOpenText, isOpenComments } = stateData;

    return (
      <div className="news">
        <NewsHeader text={data.header} />
        <button id="open_text" onClick={this.openCloseText}>
          <u>{isOpenText ? 'свернуть' : 'читать статью '}</u>
        </button>
        {isOpenText ? <NewsText text={data.text} /> : ''}
        <button onClick={this.openCloseComments}>
          <u>{isOpenComments ? 'скрыть комментарии' : 'показать комментарии'}</u>
        </button>
        {isOpenComments ? this.getComments() : ''}
        <hr />
      </div>
    );
  };
}
