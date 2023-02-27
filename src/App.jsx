import './App.scss';
import { useState } from 'react';
import ContactForm from './ContactForm';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [person, setPerson] = useState([]);

  const addPerson = (name, lastName) => {
    setPerson((p) => [
      ...p,
      {
        name: name,
        lastName: lastName,
        id: uuidv4()
      },
    ]);
  };

  return (
    <div className='App'>
      <div className='canvas'>
        <ContactForm addPerson={addPerson}></ContactForm>
        <div className='clientele'>
          <div className='client-header'>
            <div>NAME</div>
            <div>AMOUNT</div>
          </div>
          <div>
            {person.map((p) => (
              <div className='single-client'>{p.name} {p.lastName}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
