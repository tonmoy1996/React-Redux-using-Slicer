import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByValue } from "./component/CounterSlice";
import { selectCount } from "./component/CounterSlice";
import { useState } from "react";
import Post from "./component/Post";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [state, setState] = useState(0);

  return (
    <div className="App">
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button> <br />
        <input type="text" name="number" value={state} onChange={(e) => setState(e.target.value)} />
        <button onClick={() => dispatch(incrementByValue(Number(state)))}>Add </button>
        <Post />
      </div>
    </div>
  );
}

export default App;
