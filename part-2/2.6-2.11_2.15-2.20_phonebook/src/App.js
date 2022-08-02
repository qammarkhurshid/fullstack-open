import { useEffect, useState } from 'react';
import { Filter } from './components/Search';
import { ContactForm } from './components/ContactForm';
import { Numbers } from './components/Numbers';
import { Notification } from './components/Notification';
import { PhonebookServices } from './services/phonebook';

const checkIfNameExists = (data, name) => data.find((d) => d.name === name);

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [notification, setNotification] = useState('');

  const effect = () => {
    PhonebookServices.getAll().then((data) => setPersons(data));
  };
  useEffect(effect, [newNumber]);

  const addContact = async (event) => {
    event.preventDefault();
    let resp;
    const newContactObj = { name: newName, number: newNumber };
    const existingPerson = checkIfNameExists(persons, newName);
    if (existingPerson) {
      const shouldUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (!shouldUpdate) {
        setNewName(newName);
        setNewNumber(newNumber);
        return;
      }
      const { id } = existingPerson;
      resp = await PhonebookServices.update(id, { ...existingPerson, number: newNumber });
    } else {
      resp = await PhonebookServices.create(newContactObj);
      setNotification(`${newName} added successfully`);
      setTimeout(() => {
        setNotification('');
      }, 5000);
    }
    setPersons([...persons, resp]);
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

  const handleDelete = (id) => async () => {
    const shouldDelete = window.confirm('Do you really want to delete this contact?');
    if (!shouldDelete) {
      return;
    }
    const personsCopy = [...persons];
    const personToRemove = personsCopy.findIndex((el) => el.id === id);
    personsCopy.splice(personToRemove, 1);
    setPersons(personsCopy);
    try {
      await PhonebookServices.deletePerson(id);
    } catch (error) {
      if (error.response.status === 404) {
        setNotification('Record has already been deleted');
        setTimeout(() => {
          setNotification('');
        }, 5000);
      }
    }
  };

  const filteredPersons = () => persons.filter((p) => p?.name?.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
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
      <Numbers persons={filteredPersons()} onClick={handleDelete} />
    </div>
  );
};

export default App;
