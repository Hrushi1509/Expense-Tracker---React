import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (title,amount,date) =>{
    const expenseData = {
      ...title,
      ...amount,
      ...date,
      id: Math.random().toString()
    };
    console.log(expenseData)
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditorHandler = () =>{
      setIsEditing(true)
  }

  const stopEditingHandler = () =>{
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
            {!isEditing && <button onClick={startEditorHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense