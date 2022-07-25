import { useState } from 'react';

export default function Counter2() {
  const [count, setCount] = useState(42);

  return <>
    <div>
      <h2>{count}</h2>
      <button className="counter-button" onClick={() => setCount(count + 1)}>Click</button>
    </div>
  </>
}