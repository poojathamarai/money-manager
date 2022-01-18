
import './App.css';
import {Switch,Route,Link} from "react-router-dom";
import { DisplayExpense } from './Display_expense';
import { NotFound } from './NotFound';
import { DisplayIncome } from './Display_income';
import { useState } from 'react';
import { AddIncome } from './Add_income';
import { AddExpense } from './Add_expense';
function App() {
  const income=[
    {  
        date:"1/1/2021",
        amount:8000,
        data:"Salary"
    },
    {
      date:"25/1/2021",
      amount:5000,
      data:"Investments"
    }
  ]
  const expense=[
      { date:"2/1/2021", data: 'shopping', amount: 40 },
      { date:"14/1/2021", data: 'holiday', amount: 400 },
      {  date:"12/1/2021",data: 'car service', amount: 50 }
  ]
  const [incomelist,setIncomeList]=useState(income);
  const [expenselist,setExpenseList]=useState(expense);
  return (
    <div className="App">
      <div className="router-container">
              <Link to="/">Home</Link>
              <Link to="/add/income">ADD INCOME</Link>
              <Link to="/add/expense">ADD EXPENSE</Link>
              <Link to="/summary/income">INCOME SUMMARY</Link>
              <Link to="/summary/expense">EXPENSE SUMMARY</Link>
        </div>
        <Switch>
        <Route exact path="/"> HELLO WORLD</Route>
        <Route path="/add/income"><AddIncome incomelist={incomelist} setIncomeList={setIncomeList}/></Route>
        <Route path="/add/expense"><AddExpense expenselist={expenselist} setExpenseList={setExpenseList}/></Route>
        <Route path="/summary/income"><DisplayIncome incomelist={incomelist}/></Route>
      <Route path="/summary/expense"><DisplayExpense expenselist={expenselist}/></Route>
        <Route path="**">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
