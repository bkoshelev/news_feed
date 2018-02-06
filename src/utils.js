import news from './data/news';

const get = (object, data = []) => {
  switch (object) {
    case 'news': {
      return news;
    }
    case 'headers': {
      return news.map(item => item.header);
    }
    case 'comments': {
      return news[data.id].comments;
    }
    default: {
      return false;
    }
  }
};

export { get };
