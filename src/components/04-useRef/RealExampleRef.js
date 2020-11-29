import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>useRef</h1>
      <hr />

      <button
        className='btn btn-outline-warning mt-3 mb-3'
        onClick={() => {
          setShow(!show);
        }}>
        show/hide
      </button>

      {show && <MultipleCustomHooks />}
    </div>
  );
};
