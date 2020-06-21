import React from 'react';
import { getArticleList } from '../actions';
import pageRenderer from '../page-renderer';

const PageContentTpl = (props) => {
  return (
    <>
      <h2>Table of contents</h2>
      <ul className="app-list">
        { props.articles && props.articles.map((item, index) => (
          <li key={index} >{item}</li>
        )) }
      </ul>
    </>
  )
};
const PageContent = pageRenderer(PageContentTpl);

const ArticleList = () => {
  const apiRequest = () => getArticleList();
  
  return <PageContent apiRequest={apiRequest} />;
}

export default ArticleList;
