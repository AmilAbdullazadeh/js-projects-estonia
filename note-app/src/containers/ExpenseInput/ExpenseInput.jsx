import { useState } from "react";
import { useDispatch } from "react-redux";

import s from "./style.module.css";

import { addExpense } from "../../store/expense/expense-slice";

export function ExpenseInput(props) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

function handleForm(e) {
    e.preventDefault();

    if (name === '' || price === 0) {
        return;
    }

    const expense = {
        name,
        price
    };
    dispatch(addExpense(expense));
    setName('');
    setPrice(0);
}

  return (
    <form onSubmit={handleForm} >
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            onChange = {e => setName(e.target.value)}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            min="0"
            className="form-control"
            placeholder="Ex: 3.99"
            onChange={e => setPrice(Number(e.target.value))}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
