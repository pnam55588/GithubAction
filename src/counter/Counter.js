import React, { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(props.initialCount || 0);

    const increment = () => {
        setCount(count + 2);
    };

    const decrement = () => {
        setCount(count - 2);
    };

    return (
        <div>
            <h1>Counter</h1> <h1 data-testid="count">{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;