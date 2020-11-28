import React,{ useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, isLoaded: false, error: null });

  useEffect(() => {
    setState({data:null, isLoaded:false, error:null})
    fetch(url)
    .then( response => response.json())
    .then( data => {
      setState({
        isLoaded:true,
        error:null,
        data: data
      })
    })
  }, [url]);

  return state
};
