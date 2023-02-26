import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm({ setShowForm, setExpenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }
  function amountSetter(e) {
    setAmount(e.target.value);
  }
  function dateSetter(e) {
    setDate(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if ((title, amount, date)) {
      const newExpense = {
        id: Math.random.toString(),
        title,
        amount,
        date: new Date(date),
      };
      setExpenses((expenses) => [newExpense, ...expenses]);
      console.log(newExpense);
      setTitle("");
      setAmount("");
      setDate("");
      setShowForm(false);
    }

    }
    function cancelHandler(e) {
      setShowForm(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountSetter}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            value={date}
            onChange={dateSetter}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
