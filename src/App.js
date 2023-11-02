import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const LocationOfExpenditure = "pune"
  const expenseItems = [];
  for(let i=0; i<100;i++){
    expenseItems.push(<ExpenseItem LocationOfExpenditure={LocationOfExpenditure}/>)
  }
  return (
    <div className="App">
        <ExpenseItem LocationOfExpenditure={LocationOfExpenditure}/>
        <div>{expenseItems}</div>
    </div>
  );
}

export default App;
