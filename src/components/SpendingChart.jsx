import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0984e3', '#00b894', '#fdcb6e', '#e17055', '#6c5ce7'];

function SpendingChart({ data }) {
  return (
    <PieChart width={320} height={320}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={100}
        label
      >
        {data.map((entry, index) => (
          <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default SpendingChart;