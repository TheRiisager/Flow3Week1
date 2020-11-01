import React, { useEffect, useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(props.initial);

    useEffect(() => {
        localStorage.setItem("count", count);
        setCount( Number(localStorage.getItem("count")) );
        //For some stupid reason count is never saved to localStorage, and i have no idea why.
    });

    return (
        <div>
            <p>You're at {count} clicks now</p>
            <button onClick={() => setCount(count + props.inc)}>increment</button>
            <button onClick={() => setCount(count - props.inc)}>decrement</button>
        </div>
    );
}

export default Counter;