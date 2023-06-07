import React, {useState} from 'react';

const Counter = () => { 
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount (count + 1);
    };

    const handleDescrement = () => {
        setCount (count - 1);

    };

    return (
        <div>
            <h3>Contador</h3>
            <p>El valor actual es {count}</p>
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDescrement}>Decrementar</button>
        </div>
    )
};
export default Counter;