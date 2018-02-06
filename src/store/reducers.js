import C from '../constants';

const news = (state = {}, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case C.UPDATE_NEWS: {
      return { ...state, ...action.news };
    }
    default:
      return state;
  }
};

const newsList = (state = {}, action) => {
  switch (action.type) {
    case C.CREATE_NEWS_LIST: {
      return action.newsList;
    }
    case C.UPDATE_NEWS: {
      console.log('YES');
      console.log(action);
      return state.map(item => (item.id === action.news.id ? news(item, action) : item));
    }
    default:
      return state;
  }
};

export default newsList;
