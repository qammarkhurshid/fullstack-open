import { Person } from './Person';

export const Numbers = ({ persons }) => {
  return persons.map((prsn, i) => {
    return (
      <div key={i + prsn.name}>
        <Person name={prsn.name} number={prsn.number} />
      </div>
    );
  });
};
