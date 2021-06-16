import React,{useState} from 'react';
import Expenseitem from './Expenseitem';
import './Expense.css';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'
import Card from '../UI/Card';
import ExpensesChart from './Expensechart';
const Expense = (props) =>{
  const [filterYear,setFilterYear]=useState('2021');
  const filterChangeHandler=(selectedYear)=>{
    setFilterYear(selectedYear);  
  };
  const filterExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear
  })

  return (
    <div>
    
    <Card className="expenses">
    <ExpensesFilter selected={filterYear} onYearChange={filterChangeHandler}/>
    <ExpensesChart expenses={filterExpense} />
    {filterExpense.length===0 ?(
      <p>No expense found</p>
    ):(filterExpense.map(expense=>
      <Expenseitem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />))}
    
     
    </Card>
    </div>
  );
}

export default Expense;