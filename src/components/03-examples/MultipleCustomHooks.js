import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1)
  const { isLoaded, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author, quote} = !!data && data[0]
  // console.log(state);
  
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />
      {isLoaded ? (
        <blockquote className='blockquote text-right'>
          <p className='mb-0'> {quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      ) : (
        <div className='alert alert-info text-center'>Loading...</div>
      )}

      <button className='btn btn-outline-success' onClick={increment}>
        Siguiente
      </button>
    </div>
  );
};
