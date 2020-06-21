const initialResponse = null;

const apiResponse = (state = initialResponse, { type, payload }) => {
  switch (type) {
    case 'GET_ARTICLE_LIST':
      return {
        articles: [
          'What is HOC ?',
          'Create a simple HOC',
          'Use the HOC'
        ]
      };

    case 'GET_ARTICLE_DETAIL':
      return {
        errors: {
          code: '404',
          msg: 'Record is not found.'
        }
      };
    
    case 'CLEAR_STORE':
      return null;

    default:
      return state;
  }
};

export default apiResponse;
