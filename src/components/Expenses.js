import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    return (
        <div>
            <div>
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            </div>

            {props.item.map(expense => (
                <ExpenseItem 
                kry={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date} 
                />)
            )}
            
        </div>
    )
}

export default Expenses