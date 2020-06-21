import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import { clearStore } from './actions';

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
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const apiResponse = useSelector(state => state.apiResponse);
    const dispatch = useDispatch();

    /**
     * component did mount cycle
     * called only once
     */
    useEffect(() => {
      setIsLoading(true);
      if (typeof props.apiRequest === 'function') {
        // use setTimeout just for an asynchronous request emulation
        setTimeout(() => {
          dispatch(props.apiRequest());
        }, 1000);
      }
    }, []);

    /**
     * component did update cycle
     */
    useEffect(() => {
      if (apiResponse) {
        setIsLoading(false);
      }
    }, [apiResponse]);

    /**
     * component will mount cycle
     */
    useEffect(() => {
      // called before unmounting
      setIsLoading(true);
      return () => {
        // called while unmounting
        dispatch(clearStore());
      };
    }, []);

    return (
      isLoading ? (
        <LoadingIndicator />
      ) : (
        apiResponse && apiResponse.errors ? (
          <ErrorHandler {...apiResponse.errors} />
        ) : (
          <Wrapped {...apiResponse} />
        )
      )
    )
  }
}

export default pageRenderer;
