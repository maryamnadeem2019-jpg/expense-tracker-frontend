import ExpenseRow from './components/ExpenseRow';
import './App.css';

const mockExpenses = [
  { id: 1, category: "Food", description: "Groceries", amount: 25, date: "2026-07-27" },
  { id: 2, category: "Transport", description: "Fuel", amount: 15, date: "2026-07-28" },
  { id: 3, category: "Bills", description: "Electricity", amount: 40, date: "2026-07-29" },
];

function App() {
  const total = mockExpenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <h2>Total Spent: ${total}</h2>
      {mockExpenses.map(exp => (
        <ExpenseRow key={exp.id} expense={exp} />
      ))}
    </div>
  );
}

export default App;