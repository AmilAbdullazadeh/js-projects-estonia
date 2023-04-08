import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";

import { setIncome } from "../../store/expense/expense-slice";

export function IncomeInput(props) {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.expense.income);

  function setValue(e) {
    dispatch(setIncome(Number.parseFloat(e.target.value)));
  }

  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue = { !isNaN(income) && income }
          onChange={setValue}
          type="number"
          className="form-control"
          placeholder="Ex: 3000"
        />
      </div>
    </div>
  );
}
