export const Filter = ({ searchString, onChange }) => {
  return (
    <div>
      Filter Contacts: <input value={searchString} onChange={onChange} />
    </div>
  );
};
