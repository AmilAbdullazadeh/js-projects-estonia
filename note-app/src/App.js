import React from 'react';
import {useDispatch} from "react-redux";
import {addExpense} from "./features/expense/expenseSlice";


function App() {
 const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(addExpense())} className="App">
        <h1>React App</h1>
    </div>
  );
}

export default App;
