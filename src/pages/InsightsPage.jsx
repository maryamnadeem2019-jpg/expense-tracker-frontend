import { useState } from 'react';
import SpendingChart from '../components/SpendingChart';

function InsightsPage({ chartData }) {
  const [insight, setInsight] = useState('');
  const [tips, setTips] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loadingInsight, setLoadingInsight] = useState(false);
  const [loadingTips, setLoadingTips] = useState(false);
  const [loadingAnswer, setLoadingAnswer] = useState(false);

  function getInsight() {
    setLoadingInsight(true);
    fetch('http://localhost:8000/insights/spending')
      .then(res => res.json())
      .then(data => {
        setInsight(data.insight);
        setLoadingInsight(false);
      });
  }

  function getTips() {
    setLoadingTips(true);
    fetch('http://localhost:8000/insights/savings-tips')
      .then(res => res.json())
      .then(data => {
        setTips(data.tips);
        setLoadingTips(false);
      });
  }

  function askQuestion(e) {
    e.preventDefault();
    if (!question.trim()) return;
    setLoadingAnswer(true);
    fetch('http://localhost:8000/insights/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    })
      .then(res => res.json())
      .then(data => {
        setAnswer(data.answer);
        setLoadingAnswer(false);
      });
  }

  return (
    <div>
      <h1 className="page-title">Insights</h1>
      <p className="page-subtitle">AI-powered spending analysis</p>

      <div className="chart-card">
        <SpendingChart data={chartData} />
      </div>

      <div className="chart-card" style={{ marginTop: '20px' }}>
        <button onClick={getInsight} disabled={loadingInsight}>
          {loadingInsight ? 'Thinking...' : 'Get My Insights'}
        </button>
        {insight && <p>{insight}</p>}
      </div>

      <div className="chart-card" style={{ marginTop: '20px' }}>
        <button onClick={getTips} disabled={loadingTips}>
          {loadingTips ? 'Thinking...' : 'Get Saving Tips'}
        </button>
        {tips && <p>{tips}</p>}
      </div>

      <div className="chart-card" style={{ marginTop: '20px' }}>
        <form onSubmit={askQuestion}>
          <input
            type="text"
            placeholder="Ask a question about your spending..."
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
          <button type="submit" disabled={loadingAnswer}>
            {loadingAnswer ? 'Thinking...' : 'Ask'}
          </button>
        </form>
        {answer && <p>{answer}</p>}
      </div>
    </div>
  );
}

export default InsightsPage;