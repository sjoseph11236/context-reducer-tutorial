///////// Starter ///////////
import React, { useState, useReducer, useContext, createContext } from 'react';

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

const CountContext = createContext();

function Counter() {
  const [state, dispatch] = useContext(CountContext);
  return (
    <>
      Count: { state.count }
      <button onClick={()=> dispatch({type: "INCREMENT"}) }>+</button>
      <button onClick={()=> dispatch({type: "DECREMENT"}) }>-</button>
      {/* Count: {count}
      <button onClick={()=> setCount(count+1) }>+</button> */}
    </> 
  )  
}
function App() {

  const stateDispatchObj = useReducer(reducer, { count: 0 })
  // INITIAL STEP UP FOR USE REDUCER
  // const [state, dispatch] = useReducer(reducer, { count: 0 })
  // INTIAL STEP UP FOR USE STATE
  // const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={stateDispatchObj}>
      <Counter />
    </CountContext.Provider>
  );
}
export default App;
///////// Starter ///////////
