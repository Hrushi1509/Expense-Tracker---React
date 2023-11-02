import React from 'react'

const ExpenseDetails = (props) => {
    const clickHandler = () =>{
        console.log("clicked!!!")
    }
  return (
   <>
         <div>{props.title}</div>
    <div>{props.amount}</div>
    <div>{props.location}</div>
    <button onClick={clickHandler()}>Change Title</button>
   </>
  )
}

export default ExpenseDetails