import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, isLoaded: false, error: null });

  useEffect(() => {
    
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({data:null, isLoaded:false, error:null})
    fetch(url)
    .then( response => response.json())
    .then( data => {

      if(isMounted.current){
        setState({
          isLoaded:true,
          error:null,
          data: data
        })
      }
    })
  }, [url]);

  return state
};
