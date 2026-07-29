import ExpenseRow from '../components/ExpenseRow';

function Dashboard({ expenses, filteredExpenses, total, filterCategory, setFilterCategory }) {
  return (
    <div>
      <h2>Total Spent: ${total}</h2>

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

export default Dashboard;