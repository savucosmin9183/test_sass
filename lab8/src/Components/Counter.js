import React, {useEffect} from 'react';



function Counter(props){

    useEffect(() => {
        if(props.count === 0)
            console.log("Counterul este 0.")   
    })

    return (
        <div className="counter">
            <p className="number">{props.count}</p>
            <button className="button" onClick={props.increment}>Increment</button>
            <button className="button" onClick={props.decrement}>Decrement</button>
            <button className="button" onClick={props.reset}>Reset</button>    
        </div>
    )
}

export default Counter;