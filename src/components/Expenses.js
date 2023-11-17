import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    const [filteredYear,setFilteredYear] = useState('2020')
    const filterChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    }
  return (
    <div>
        <div>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        </div>
        <ExpenseItem
            title={props.item[0].title}
            amount={props.item[0].amount}
            data={props.item[0].date}
        />
        <ExpenseItem
            title={props.item[1].title}
            amount={props.item[1].amount}
            data={props.item[1].date}
        />
    </div>
  )
}

export default Expenses