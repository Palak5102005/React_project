import React, { useState } from "react";
import "./App.css";

function ExpenseTracker() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (expense && amount) {
      setExpenses([
        ...expenses,
        { id: Date.now(), name: expense, amount: parseFloat(amount) }
      ]);
      setExpense("");
      setAmount("");
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="container">
      <h2 className="header">Expense Tracker</h2>

      {/* Input Fields */}
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Expense"
          className="input"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="button" onClick={addExpense}>
          Add Expense
        </button>
      </div>

      {/* Expense List */}
      <ul className="expenseList">
        {expenses.map((exp) => (
          <li key={exp.id} className="expenseItem">
            <span>
              {exp.name} - ${exp.amount.toFixed(2)}
            </span>
            <button
              className="deleteButton"
              onClick={() => deleteExpense(exp.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Total */}
      <div className="total">Total: ${total.toFixed(2)}</div>
    </div>
  );
}

export default ExpenseTracker;
