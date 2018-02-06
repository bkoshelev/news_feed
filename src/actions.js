import C from './constants';

const createNewsList = newsList => ({
  type: C.CREATE_NEWS_LIST,
  newsList,
});

const updateNews = news => ({
  type: C.UPDATE_NEWS,
  news,
});

export { createNewsList, updateNews };
