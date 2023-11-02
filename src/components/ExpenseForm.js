import React, { useState } from 'react'

const ExpenseForm = () => {
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')

    const getTitle = (e) =>{
        setTitle(e.target.value)
        console.log(e.target.value)
    }
    const getAmount = (e) =>{
        setAmount(e.target.value)
        console.log(e.target.value)
    }
    const getDate = (e) =>{
        setDate(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div>
        <form>
            <label>Expense Title</label>
            <input type='text' value={title} onChange={getTitle}/><br/>
            <label>Expense Amount</label>
            <input type='number' value={amount} onChange={getAmount}/><br/>
            <label>Expense Date</label>
            <input type='date' value={date} onChange={getDate}/><br/>
            <button>Add Expense</button>
        </form>
    </div>
  )
}

export default ExpenseForm