import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import './Expenses.css'
const ExpensesList = (props) => {
  if (props.List.length === 0) {
    return <h2 className="filteredexp">No Expenses Found</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.List.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
