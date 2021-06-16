import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) =>{
    const [enterTitle, setEnterTitle]=useState('');
    const [enterDate, setEnterDate]=useState('');
    const [enterAmount, setEnterAmount]=useState('');
   
    const titleChangehandler=(events)=>{
        setEnterTitle(events.target.value);
        
    }
    const amountChangehandler=(events)=>{
        setEnterAmount(events.target.value);
        
    }
    
    const dateChangehandler=(events)=>{
        setEnterDate(events.target.value);
        
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const Expensedata={
            title:enterTitle,
            amount: +enterAmount,
            date: new Date(enterDate)
        }
        props.onSaveExpensedate(Expensedata);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }
    return <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" value={enterTitle} onChange={titleChangehandler} />
                    </div>
                    <div className="new-expense__control">
                            <label>Amount</label>
                            <input type="number" value={enterAmount} min="0.01" step="0.01" onChange={amountChangehandler} />
                    </div>
                    <div className="new-expense__control">
                            <label>date</label>
                            <input type="date" value={enterDate} min="2019-01-01" max="2022-12-31" onChange={dateChangehandler} />
                    </div>
                </div>
                <div className="new-expense__action">
                <button type="button" onClick={props.oncancel} >Cancel</button>
                    <button type="submit"  >Add Expense</button>
                </div>
            </form>
}
export default ExpenseForm;