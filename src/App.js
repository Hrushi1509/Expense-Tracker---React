import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseDetails from './components/ExpenseDetails';

function App() {
  const LocationOfExpenditure = "pune"
  const expenseItems = [];
  for(let i=0; i<100;i++){
    expenseItems.push(<ExpenseItem LocationOfExpenditure={LocationOfExpenditure}/>)
  }
  const amount  = 100;
  const title = "React";
  const location  = "Mumbai";
  return (
    <div className="App">
        <ExpenseItem LocationOfExpenditure={LocationOfExpenditure}/>
        {/* <div>{expenseItems}</div> */}
        <ExpenseDetails amount={amount} title={title} location={location}/>
    </div>
  );
}

export default App;
