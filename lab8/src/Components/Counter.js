import React, {useState} from 'react';

const initialState = {
    value: 0
};

function Counter(){

    const [state, setState] = useState(initialState);

    const incrementHandler = () => {
        setState({
            value: state.value + 1
        })
    }

    const decrementHandler = () => {
        setState({
            value: state.value - 1
        })
    }

    const resetHandler = () => {
        setState({
            value: 0
        })
    }
    return (
        <div className="counter">
            <p className="number">{state.value}</p>
            <button className="button" onClick={incrementHandler}>Increment</button>
            <button className="button" onClick={decrementHandler}>Decrement</button>
            <button className="button" onClick={resetHandler}>Reset</button>    
        </div>
    )
}

export default Counter;