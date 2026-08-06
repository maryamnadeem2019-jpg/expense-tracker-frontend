import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import AddExpensePage from './pages/AddExpensePage';
import InsightsPage from './pages/InsightsPage';
import { useState, useEffect } from 'react';

function App() {
const [expenses, setExpenses] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetch('http://localhost:8000/expenses')
    .then(res => res.json())
    .then(data => {
      setExpenses(data);
      setIsLoading(false);
    })
    .catch(err => {
      console.error('Failed to load expenses:', err);
      setIsLoading(false);
    });
}, []);

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
  fetch('http://localhost:8000/expenses', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newExpense),
  })
    .then(res => res.json())
    .then(() => {
      fetch('http://localhost:8000/expenses')
        .then(res => res.json())
        .then(data => setExpenses(data));
    })
    .catch(err => {
      console.error('Failed to add expense:', err);
      alert('Something went wrong adding your expense. Please try again.');
    });
}
function deleteExpense(id) {
  fetch(`http://localhost:8000/expenses/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      fetch('http://localhost:8000/expenses')
        .then(res => res.json())
        .then(data => setExpenses(data));
    })
    .catch(err => {
      console.error('Failed to delete expense:', err);
      alert('Something went wrong deleting this expense.');
    });
}

  return (
    <BrowserRouter>
      <div className="layout">
        <aside className="sidebar">
          <h2 className="brand">💰 SpendWise</h2>
          <nav>
            <Link to="/" className="nav-link">Dashboard</Link>
            <Link to="/add" className="nav-link">Add Expense</Link>
            <Link to="/insights" className="nav-link">Insights</Link>
          </nav>
        </aside>

        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <Dashboard
                expenses={expenses}
                filteredExpenses={filteredExpenses}
                total={total}
                categoryTotals={categoryTotals}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                isLoading={isLoading}
                deleteExpense={deleteExpense}
              />
            } />
            <Route path="/add" element={<AddExpensePage addExpense={addExpense} />} />
            <Route path="/insights" element={<InsightsPage chartData={chartData} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;