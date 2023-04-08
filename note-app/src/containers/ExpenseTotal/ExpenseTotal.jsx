import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
    const income = useSelector((state) => state.expense.income);
    const expenseList = useSelector((state) => state.expense.exepenseList);

    const totalExpense = expenseList.reduce((acc, item) => {
        return acc + Number.parseFloat(item.price)
    }, 0);

    const remainingMoney = income - totalExpense;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpense} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney?.toFixed(2)} $</div>
      </div>
    </div>
  );
}
