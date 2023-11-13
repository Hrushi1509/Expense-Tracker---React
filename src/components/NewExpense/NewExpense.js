import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (title,amount,date) =>{
    const expenseData = {
      ...title,
      ...amount,
      ...date,
      id: Math.random().toString()
    };
    console.log(expenseData)
    props.onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
        <form>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </form>
    </div>
  )
}

export default NewExpense