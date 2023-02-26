import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("all");
  const filteredExpenses = expenses.filter((expense) => {
    return filteredYear === "all"
      ? expenses
      : expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        setFilteredYear={setFilteredYear}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
