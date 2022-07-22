import { useState } from 'react';

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

// <div>
//   <StatisticLine text="Good" value={good} />
//   <StatisticLine text="Bad" value={bad} />
//   <StatisticLine text="Neutral" value={neutral} />
//   <StatisticLine text="All" value={all} />
//   <StatisticLine text="Average" value={average.toFixed(1)} />
//   <StatisticLine text="Positive" value={`${positive.toFixed(1)} %`} />
// </div>

const Statistics = ({ values }) => {
  const { good, bad, neutral } = values;
  if (!good && !bad && !neutral) return <p>No feedback provided!</p>;
  return (
    <table>
      <tbody>
        {Object.keys(values).map((k, i) => {
          return (
            <tr key={i}>
              <td>{k}</td>
              <td>{values[k]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

function App() {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleGood = () => {
    setGoodCount(goodCount + 1);
  };

  const handleNeutral = () => {
    setNeutralCount(neutralCount + 1);
  };

  const handleBad = () => {
    setBadCount(badCount + 1);
  };

  const sumAll = () => goodCount + badCount + neutralCount;
  const calculateAverage = () => sumAll() / 3;

  const stats = {
    good: goodCount,
    bad: badCount,
    neutral: neutralCount,
    all: sumAll(),
    average: calculateAverage().toFixed(1),
    positive: ((goodCount / sumAll()) * 100).toFixed(1),
  };
  return (
    <div>
      <Heading text="Give FeedBack" />
      <Button text="Good" onClick={handleGood} />
      <Button text="Neutral" onClick={handleNeutral} />
      <Button text="Bad" onClick={handleBad} />
      <Heading text="Statistics" />
      <Statistics values={stats} />
    </div>
  );
}

export default App;
