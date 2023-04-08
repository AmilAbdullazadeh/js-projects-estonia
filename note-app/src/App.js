import React from 'react';
import {useDispatch} from "react-redux";

import s from "./style.module.css";

//components
import { Logo } from "./components/Logo/Logo"
import { IncomeInput } from "./containers/IncomeInput/IncomeInput"
import { ExpenseInput } from "./containers/ExpenseInput/ExpenseInput"
import { ExpenseListContainer } from "./containers/ExpenseList/ExpenseList"
import { ExpenseTotal } from "./containers/ExpenseTotal/ExpenseTotal"


function App() {

  return (
    <div className={s.main_container}>
        <div className={`row ${s.header}`}>
            <div className={`col-3`}>
                <Logo title='IExepnseTracker' subtitle='Something' />
            </div>
            <div className={`col-9 ${s.income_input}`}>
            <IncomeInput />
            </div>
        </div>
        <div className={`row ${s.workspace}`}>
            <div className={`col-12  ${s.expense_input}`}>
            <ExpenseInput />
            </div>
            <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
                <ExpenseListContainer />
                <div className={`col-12 ${s.expense_total}`}>
                    <ExpenseTotal />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
