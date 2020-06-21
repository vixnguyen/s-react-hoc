import React from 'react';
import { getArticleDetail } from '../actions';
import pageRenderer from '../page-renderer';

const PageContentTpl = (props) => {
  return (
    <div>{props.msg}</div>
  )
};
const PageContent = pageRenderer(PageContentTpl);

const ArticleDetail = () => {
  const apiRequest = () => getArticleDetail();

  return <PageContent apiRequest={apiRequest} />;
}

export default ArticleDetail;
