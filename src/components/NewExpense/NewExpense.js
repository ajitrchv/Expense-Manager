import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData ={
        id: Math.random().toString(), ...enteredExpenseData
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
}
return <div className="new-expense">
    <ExpenseForm
    onSaveExpenseData={onSaveExpenseDataHandler}/>
</div>
}
export default NewExpense;