import React,{useState} from 'react'

const ExpenseDetails = (props) => {
    const [title,setTitle] = useState(props.title)
    const [amount,setAmount] = useState(props.amount)
    const clickHandler = () =>{
        setTitle("title changed")
        setAmount("100$")
        console.log("clicked!!!")
    }
  return (
   <>
         <div>{title}</div>
    <div>{amount}</div>
    <div>{props.location}</div>
    <button onClick={clickHandler()}>Change Title</button>
   </>
  )
}

export default ExpenseDetails