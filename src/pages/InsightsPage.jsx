import SpendingChart from '../components/SpendingChart';

function InsightsPage({ chartData }) {
  return (
    <div>
      <h2>Spending Breakdown</h2>
      <SpendingChart data={chartData} />
    </div>
  );
}

export default InsightsPage;