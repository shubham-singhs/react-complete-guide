import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './Expenseform'
const NewExpense = (props) =>{
    const [isEditing,setisEditing]=useState(false);
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseDate={
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseDate);
    
    }
    const StartEditingHandler =()=>{
        setisEditing(true);
    }
    const StopEditingHandler =()=>{
        setisEditing(false);
    }
return <div className="new-expense">
            {!isEditing && <button onClick={StartEditingHandler}>Add new Expense</button>}
            {isEditing &&<ExpenseForm  onSaveExpensedate={saveExpenseDataHandler} oncancel={StopEditingHandler}/>}
        </div>
};

export default NewExpense;