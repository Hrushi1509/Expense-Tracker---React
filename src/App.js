import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseDetails from './components/ExpenseDetails';
import ExpenseForm from './components/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';


const DUMMY_EXPENSES = [
  {
    id:'e1',
    title:'Toilet Paper',
    amount: 94,
    date: new Date(2020,7,24),
  },
  {
    id:'e2',
    title:'Car Insurance',
    amount: 265,
    date: new Date(2021,2,20)
  }
]
function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

  const LocationOfExpenditure = "pune"
  const expenseItems = [];
  for(let i=0; i<100;i++){
    expenseItems.push(<ExpenseItem LocationOfExpenditure={LocationOfExpenditure}/>)
  }
  const amount  = 100;
  const title = "React";
  const location  = "Mumbai";

  const addExpenseHandler = expense =>{
    console.log('in app.js')
    console.log(expense)
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  }

  

  return (
    <div className="App">
        <ExpenseItem LocationOfExpenditure={LocationOfExpenditure}/>
        {/* <div>{expenseItems}</div> */}
        {/* <ExpenseDetails amount={amount} title={title} location={location}/> */}
        <ExpenseForm/>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
