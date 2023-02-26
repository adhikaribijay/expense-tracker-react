import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ expense }) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
