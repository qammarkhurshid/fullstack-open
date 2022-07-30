import { useEffect, useState } from 'react';
import { Filter } from './components/Search';
import { ContactForm } from './components/ContactForm';
import { Numbers } from './components/Numbers';
import axios from 'axios';

const checkIfNameExists = (data, name) => data.find((d) => d.name === name);

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const effect = () => {
    axios.get(`http://localhost:3001/persons`).then(({ data }) => {
      setPersons(data);
    });
  };
  useEffect(effect, []);

  const addContact = (event) => {
    event.preventDefault();

    checkIfNameExists(persons, newName)
      ? alert(`${newName} already exists`)
      : setPersons(persons.concat({ name: newName, number: newNumber }));
    setNewName('');
    setNewNumber('');
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredPersons = () => persons.filter((p) => p.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchValue} onChange={handleSearchValue} />
      <h2>Add New Contact:</h2>
      <ContactForm
        onSubmit={addContact}
        personName={newName}
        onNameChange={handleNameChange}
        personNumber={newNumber}
        onNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers persons={filteredPersons()} />
    </div>
  );
};

export default App;
