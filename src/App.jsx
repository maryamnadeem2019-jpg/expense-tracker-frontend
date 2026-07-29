import ExpenseForm from './components/ExpenseForm';
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
  const [filterCategory, setFilterCategory] = useState('All');

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const filteredExpenses = filterCategory === 'All'
    ? expenses
    : expenses.filter(exp => exp.category === filterCategory);

  const categoryTotals = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});
    console.log(categoryTotals);


  console.log(categoryTotals);

  function addExpense(newExpense) {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  }

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <h2>Total Spent: ${total}</h2>
      <ExpenseForm onAdd={addExpense} />

      <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
        <option>All</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Other</option>
      </select>
    
      {filteredExpenses.map(exp => (
        <ExpenseRow key={exp.id} expense={exp} />
      ))}
    </div>
  );
}

export default App;