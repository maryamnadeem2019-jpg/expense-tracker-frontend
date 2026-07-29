import { useState } from 'react';

function ExpenseForm({ onAdd }) {
  const [category, setCategory] = useState('Food');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!description || !amount || !date) {
      alert('Please fill in all fields');
      return;
    }

    onAdd({
      category,
      description,
      amount: Number(amount),
      date,
    });

    setDescription('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Transport</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;