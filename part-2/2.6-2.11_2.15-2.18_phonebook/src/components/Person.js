export const Person = ({ name, number, onClick, personId }) => (
  <p>
    {name} ------- {number}
    <button onClick={onClick(personId)}>Delete</button>
  </p>
);
