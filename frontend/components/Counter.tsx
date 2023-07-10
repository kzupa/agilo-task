'use client';

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="mt-5 flex items-center justify-center">
      <button
        className="px-4 py-2 rounded-md bg-midnight text-white"
        onClick={decrement}
      >
        -
      </button>
      <span className="px-10 py-2 font-mono text-[20px]">{count}</span>
      <button
        className="px-4 py-2 rounded-md bg-midnight text-white"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
