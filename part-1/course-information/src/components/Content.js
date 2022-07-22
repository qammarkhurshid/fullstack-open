const Part = ({ part, exercise }) => {
  return (
    <div>
      <p>
        {part} {exercise}
      </p>
    </div>
  );
};

export const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].name} exercise={parts[0].exercises} />
      <Part part={parts[1].name} exercise={parts[1].exercises} />
      <Part part={parts[2].name} exercise={parts[2].exercises} />
    </div>
  );
};
