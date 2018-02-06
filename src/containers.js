import { connect } from 'react-redux';
import NewNews from './components/news/new_news';
import Feed from './components/news_feed/feed';
import { createNewsList, updateNews } from './actions';

const NewNewsConnect = connect(
  state => ({
    currentNewsList: state.newsList,
  }),
  dispatch => ({
    updateNews(newsList) {
      dispatch(updateNews(newsList));
    },
  }),
)(NewNews);

const FeedConnect = connect(
  state => ({
    currentNewsList: state.newsList,
  }),
  dispatch => ({
    createNewsList(newsList) {
      dispatch(createNewsList(newsList));
    },
  }),
)(Feed);

export { FeedConnect, NewNewsConnect };
