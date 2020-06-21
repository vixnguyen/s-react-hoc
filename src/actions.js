export const getArticleList = (payload) => {
  return {
    type: 'GET_ARTICLE_LIST',
    payload
  };
};

export const getArticleDetail = (payload) => {
  return {
    type: 'GET_ARTICLE_DETAIL',
    payload
  };
};

export const clearStore = (payload) => {
  return {
    type: 'CLEAR_STORE',
    payload
  };
}
