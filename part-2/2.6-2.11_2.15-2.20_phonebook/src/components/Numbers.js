import { Person } from './Person';

export const Numbers = ({ persons, onClick }) => {
  return persons.map((prsn, i) => {
    return (
      <div key={i + prsn.name}>
        <Person name={prsn.name} number={prsn.number} personId={prsn.id} onClick={onClick} />
      </div>
    );
  });
};
