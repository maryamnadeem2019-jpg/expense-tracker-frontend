import { useState } from 'react';
import ExpenseRow from './components/ExpenseRow';
import './App.css';

const initialExpenses = [
  { id: 1, category: "Food", description: "Groceries", amount: 25, date: "2026-07-27" },
  { id: 2, category: "Transport", description: "Fuel", amount: 15, date: "2026-07-28" },
  { id: 3, category: "Bills", description: "Electricity", amount: 40, date: "2026-07-29" },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  function addExpense(newExpense) {
  setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
}
  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <h2>Total Spent: ${total}</h2>
       <button onClick={() => addExpense({ category: "Test", description: "Sample item", amount: 10, date: "2026-07-29" })}>
        Add Test Expense
      </button>
      {expenses.map(exp => (
        <ExpenseRow key={exp.id} expense={exp} />
      ))}
    </div>
  );
}

export default App;