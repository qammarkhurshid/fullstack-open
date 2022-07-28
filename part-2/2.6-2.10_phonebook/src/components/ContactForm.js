export const ContactForm = ({ onSubmit, personName, onNameChange, personNumber, onNumberChange }) => {
  return (
    <form action="submit" onSubmit={onSubmit}>
      <div>
        Name: <input value={personName} onChange={onNameChange} />
      </div>
      <div>
        Number: <input value={personNumber} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
