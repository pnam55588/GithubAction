import React, { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(props.initialCount || 0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h1>Hello, Counter change</h1> <h1 data-testid="count">{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;