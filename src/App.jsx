import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import AddExpensePage from './pages/AddExpensePage';
import InsightsPage from './pages/InsightsPage';

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

  const chartData = Object.entries(categoryTotals).map(([name, value]) => ({ name, value }));

  function addExpense(newExpense) {
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        <h1>Expense Tracker</h1>

        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/add">Add Expense</Link> | <Link to="/insights">Insights</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <Dashboard
              expenses={expenses}
              filteredExpenses={filteredExpenses}
              total={total}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
            />
          } />
          <Route path="/add" element={<AddExpensePage addExpense={addExpense} />} />
          <Route path="/insights" element={<InsightsPage chartData={chartData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;