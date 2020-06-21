import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setData({
        articles: [
          'What is HOC ?',
          'Create a simple HOC',
          'Use the HOC'
        ]
      });
    }, 1000);
  }, []);
  
  return <PageContent isLoading={isLoading} data={data} errors={null} />;
}

export default ArticleList;
