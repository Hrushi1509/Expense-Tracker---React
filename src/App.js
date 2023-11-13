import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseDetails from './components/ExpenseDetails';
import ExpenseForm from './components/ExpenseForm';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
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
    console.log(expenses)
  }

  return (
    <div className="App">
        <ExpenseItem LocationOfExpenditure={LocationOfExpenditure}/>
        {/* <div>{expenseItems}</div> */}
        {/* <ExpenseDetails amount={amount} title={title} location={location}/> */}
        <ExpenseForm/>
        <NewExpense onAddExpense={addExpenseHandler}/>
    </div>
  );
}

export default App;
