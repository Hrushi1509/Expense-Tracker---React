import React from 'react'

const ExpenseItem = (props) => {
  return (
    <>
        <h2>Expense Item</h2>
        <p>Food Rs 10</p>
        <p>Petrol Rs 100</p>
        <p>Movies Rs 200</p>
        <div>{props.LocationOfExpenditure}</div>
    </>
  )
}

export default ExpenseItem