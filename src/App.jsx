import './App.scss';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import { v4 as uuidv4 } from 'uuid';
import List from './ContactList';
import Summary from './Summary';

function App() {
  const [person, setPerson] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem('people');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const [selectedFilter, setSelectedFilter] = useState('all');

  const addPerson = (name, lastName) => {
    setPerson((p) => [
      ...p,
      {
        name: name,
        lastName: lastName,
        balance: 0,
        deleting: false,
        id: uuidv4(),
      },
    ]);
  };

  useEffect(() => {
    // storing input name
    localStorage.setItem('people', JSON.stringify(person));
  }, [person]);

  return (
    <div className='App'>
      <Summary person={person}></Summary>
      <div className='canvas'>
        <ContactForm addPerson={addPerson}></ContactForm>
        <div className='clientele'>
          <div className='client-header'>
            <div>NAME</div>
            <select
              name='filter'
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value='all'>All accounts</option>
              <option value='empty'>Empty accounts</option>
              <option value='full'>Accounts with money</option>
            </select>
            <div>AMOUNT</div>
          </div>
          <List
            person={person}
            setPerson={setPerson}
            filter={selectedFilter}
          ></List>
        </div>
      </div>
    </div>
  );
}

export default App;
