import ExpenseForm from '../components/ExpenseForm';

function AddExpensePage({ addExpense }) {
  return (
    <div>
      <h2>Add a New Expense</h2>
      <ExpenseForm onAdd={addExpense} />
    </div>
  );
}

export default AddExpensePage;