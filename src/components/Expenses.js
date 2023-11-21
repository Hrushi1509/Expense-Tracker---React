import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() == filteredYear
    })

    let expensesContent = <p>No Expenses Found</p>

    if(filteredExpenses.length > 0){
        expensesContent = ( filteredExpenses.map((expense) =>(
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
       )
    }

    return (
        <div>
            <div>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            </div>

            {/* {props.item.map(expense => (
                <ExpenseItem 
                kry={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
                />)
            )} */}

            {expensesContent}
        </div>
    )
}

export default Expenses