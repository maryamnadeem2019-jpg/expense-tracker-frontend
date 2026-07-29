import ExpenseRow from './components/ExpenseRow';

const mockExpenses = [
  { id: 1, category: "Food", description: "Groceries", amount: 25, date: "2026-07-27" },
  { id: 2, category: "Transport", description: "Fuel", amount: 15, date: "2026-07-28" },
];

function App() {
  return (
    <div>
      {mockExpenses.map(exp => (
        <ExpenseRow key={exp.id} expense={exp} />
      ))}
    </div>
  );
}
export default App;