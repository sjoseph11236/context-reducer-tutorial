///////// Starter ///////////
import React, { useState, useReducer} from 'react';

const reducer = (state, action) => { 
  switch(action.type) { 
    case 'INCREMENT':
      return { count: state.count + 1 } 
    case 'DECREMENT':
      return { count: state.count - 1 } 
      default:
        throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  // INTIAL STEP UP FOR USE STATE
  // const [count, setCount] = useState(0);
  return (
    <>
      Count: { state.count }
      <button onClick={()=> dispatch({type: "INCREMENT"}) }>+</button>
      <button onClick={()=> dispatch({type: "DECREMENT"}) }>-</button>
      {/* Count: {count}
      <button onClick={()=> setCount(count+1) }>+</button> */}
    </>
  );
}
export default App;
///////// Starter ///////////
