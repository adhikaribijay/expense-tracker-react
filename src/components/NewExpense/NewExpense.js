import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

import "./NewExpense.css";
function NewExpense({ expenses, setExpenses }) {
  const [showForm, setShowForm] = useState(false);
  const buttonToggler = () => {
    setShowForm(true);
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm setShowForm={setShowForm} setExpenses={setExpenses} />
      ) : (
        <button onClick={buttonToggler}>
          Add new Expense
        </button>
      )}
    </div>
  );
}

export default NewExpense;
