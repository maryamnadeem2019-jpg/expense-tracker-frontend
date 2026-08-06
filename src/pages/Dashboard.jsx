import ExpenseRow from '../components/ExpenseRow';

function Dashboard({ expenses, filteredExpenses, total, categoryTotals, filterCategory, setFilterCategory, isLoading,deleteExpense }) {
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

        {isLoading ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>Loading your expenses...</p>
        ) : filteredExpenses.length === 0 ? (
          <p style={{ color: '#999', textAlign: 'center', padding: '20px' }}>
            No expenses yet — add your first one to get started!
          </p>
        ) : (
         filteredExpenses.map(exp => (
  <ExpenseRow key={exp._id} expense={exp} onDelete={deleteExpense} />
))
        )}
      </div>
    </div>
  );
}

export default Dashboard;