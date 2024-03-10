import { useState } from "react";


function App() {

  let [counter, setCounter] = useState(0);
  
  const addValue = () =>{
    if (counter < 10 ) {
      
      setCounter(counter + 1)
      
    }
  }
  
  const removeValue = () =>{
    if (counter > 0) {
      setCounter(counter -1)
      
    }
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter App: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br></br>
      <br></br>
      <button onClick={removeValue}>Remove Value: {counter}</button>
     
    </>
  )
}

export default App
