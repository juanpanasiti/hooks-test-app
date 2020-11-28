import React,{ useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, laoding: true, error: null });

  useEffect(() => {
    fetch(url)
    .then( response => response.json())
    .then( data => {
      setState({
        laoding:false,
        error:null,
        data: data
      })
    })
  }, [url]);

  return state
};
