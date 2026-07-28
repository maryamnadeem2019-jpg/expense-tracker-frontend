function ExpenseRow({ expense }) {
  return (
    <div className="expense-row">
      <span>{expense.category}</span>
      <span>{expense.description}</span>
      <span>${expense.amount}</span>
      <span>{expense.date}</span>
    </div>
  );
}

export default ExpenseRow;