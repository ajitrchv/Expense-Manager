import "./ExpenseItem.css";
import Card from "./Card"
import ExpenseDate from "./ExpenseDate";
import React,{useState} from "react";
function ExpenseItem(props) {
/////must be called directly inside component function
  const [title, setTitle] = useState(props.title);

  function clickHandler(){
    setTitle('Updated '+title);
  }

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date = {props.date}/>
      </div>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
      <button onClick={clickHandler}>
        Change Title
      </button>
    </Card>
  );
}
export default ExpenseItem;
