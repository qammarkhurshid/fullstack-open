import { useState } from 'react';
const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
];

const votesMap = {};
anecdotes.forEach((ad, idx) => {
  votesMap[idx] = 0;
});

const findHighestVotedAnecdote = (votesMap) => {
  let highest = 0;
  let indx = 0;
  Object.keys(votesMap).forEach((key, idx) => {
    if (votesMap[key] > highest) {
      highest = votesMap[key];
      indx = idx;
    }
  });
  return indx;
};

const Vote = ({ votes }) => <div>has {votes} votes</div>;
const Anecdote = ({ anecdote }) => <div>{anecdote}</div>;
const Button = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;
const Heading = ({ text }) => <h1>{text}</h1>;
const HighestRated = ({ votesMap }) => {
  const highRatedIndex = findHighestVotedAnecdote(votesMap);
  return <div>{anecdotes[highRatedIndex]}</div>;
};

function App() {
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length));
  const [votes, setVotes] = useState(votesMap);
  const fetchRandomAnecdote = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  };
  const upvoteAnecdote = () => {
    const votesMapCopy = { ...votes };
    votesMapCopy[`${selected}`] += 1;
    return setVotes(votesMapCopy);
  };
  return (
    <div>
      <Heading text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <Vote votes={votes[selected]} />
      <Button onClick={fetchRandomAnecdote} label="Next Anecdote" />
      <Button onClick={upvoteAnecdote} label="Vote" />
      <Heading text="Anecdote with most votes" />
      <HighestRated votesMap={votes} />
    </div>
  );
}

export default App;
