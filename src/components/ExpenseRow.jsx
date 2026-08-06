function ExpenseRow({ expense, onDelete }) {
  return (
    <div className="expense-row">
      <span>{expense.category}</span>
      <span>{expense.description}</span>
      <span>${expense.amount}</span>
      <span>{expense.date}</span>
      <button onClick={() => onDelete(expense._id)} style={{ marginLeft: '10px' }}>
        🗑
      </button>
    </div>
  );
}

export default ExpenseRow;