import React, { useState, useEffect } from 'react';
import pageRenderer from '../page-renderer';

const PageContentTpl = (props) => {
  return (
    <div>{props.msg}</div>
  )
};
const PageContent = pageRenderer(PageContentTpl);

const ArticleDetail = () => {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setErrors({
        code: '404',
        msg: 'Record is not found.'
      });
    }, 2000);
  }, []);

  return <PageContent isLoading={isLoading} data={null} errors={errors} />;
}

export default ArticleDetail;
