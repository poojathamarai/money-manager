
import './App.css';
import {Switch,Route,Link} from "react-router-dom";
import { Display_expense } from './Display_expense';
import { NotFound } from './NotFound';
import { Display_income } from './Display_income';
import { useState } from 'react';
import { Add_income } from './Add_income';
import { Add_expense } from './Add_expense';
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
        <Route path="/add/income"><Add_income incomelist={incomelist} setIncomeList={setIncomeList}/></Route>
        <Route path="/add/expense"><Add_expense expenselist={expenselist} setExpenseList={setExpenseList}/></Route>
        <Route path="/summary/income"><Display_income incomelist={incomelist}/></Route>
      <Route path="/summary/expense"><Display_expense expenselist={expenselist}/></Route>
        <Route path="**">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
