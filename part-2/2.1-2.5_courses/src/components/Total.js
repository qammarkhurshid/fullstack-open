const sumAllExercises = (parts) => {
  return parts.reduce((prev, curr) => {
    return prev + curr.exercises;
  }, 0);
};

export const Total = ({ parts }) => {
  return <h3>Total of {sumAllExercises(parts)} exercises</h3>;
};
