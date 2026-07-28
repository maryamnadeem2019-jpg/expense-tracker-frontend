import ExpenseRow from './components/ExpenseRow';

const sampleExpense = {
  category: "Food",
  description: "Groceries",
  amount: 25,
  date: "2026-07-27",
};

function App() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseRow expense={sampleExpense} />
    </div>
  );
}

export default App;