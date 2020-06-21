import React from 'react';
import logo from './logo.svg';

const LoadingIndicator = () => {
  return <img src={logo} className="app-logo" alt="logo" />
}

const ErrorHandler = (props) => {
  return (
    <div>
      <h2>{props.code}</h2>
      <div>{props.msg}</div>
    </div>
  )
}

const pageRenderer = (Wrapped) => {
  return function (props) {
    return (
      props.isLoading ? (
        <LoadingIndicator />
      ) : (
        props.errors ? (
          <ErrorHandler {...props.errors} />
        ) : (
          <Wrapped {...props.data} />
        )
      )
    )
  }
}

export default pageRenderer;
