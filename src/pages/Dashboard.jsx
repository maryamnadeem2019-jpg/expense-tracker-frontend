import ExpenseRow from '../components/ExpenseRow';

function Dashboard({ expenses, filteredExpenses, total, categoryTotals, filterCategory, setFilterCategory }) {
  const topCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0];

  return (
    <div>
      <h1 className="page-title">This Month</h1>
      <p className="page-subtitle">Spending overview</p>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total spent</div>
          <div className="stat-value">${total}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Top category</div>
          <div className="stat-value">{topCategory ? `${topCategory[0]} $${topCategory[1]}` : 'N/A'}</div>
        </div>
      </div>

      <div className="chart-card">
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
    </div>
  );
}

export default Dashboard;