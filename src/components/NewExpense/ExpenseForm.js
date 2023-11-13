import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title,setTitle] = useState("");
    const [amount,setAmount] = useState(0);
    const [date,setDate] = useState("");

    const getTitle = (e) =>{
        setTitle(e.target.value)
    }
    const getAmount = (e) =>{
        setAmount(e.target.value)
    }
    const getDate = (e) =>{
        setDate(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const expenseData = {
            title: title,
            amount : amount,
            data: new Date(date),
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    }

  return (
    <form onSubmit={handleSubmit()}>
        <div className='new-expense_controls'>
            <div className='.new-expense_control'>
                <label>Title</label>
                <input type='text' value={title} onChange={getTitle}/>
            </div>
            <div className='.new-expense_control'>
                <label>Amount</label>
                <input type='number' value={amount} min="0.01" step="0.01" onChange={getAmount}/>
            </div>
            <div className='.new-expense_control'>
                <label>Date</label>
                <input type='date' value={date} min="2019-01-01" max="2023-12-31" onChange={getDate}/>
            </div>
        </div>
        <div className='new-expense_actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm