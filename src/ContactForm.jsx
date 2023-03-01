import './App.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ContactForm({ addPerson }) {
  const [name, setName] = useState('');
  const handleName = (event) => {
    setName(event.target.value);
  };

  const [lastName, setLastName] = useState('');
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const isValidInput = (name, lastname) => {
    return name.length > 3 && lastname.length > 3;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValidInput(name, lastName)) {
      addPerson(name, lastName);
      setName('');
      setLastName('');
    }
  };

  return (
    <div className='all-clients'>
      <form className='form' onSubmit={onSubmit}>
        <div className='input-bin'>
          <label htmlFor='name'>First name</label>
          <input
            className='input-field'
            type='text'
            id='name'
            value={name}
            onChange={handleName}
          ></input>
        </div>
        <div className='input-bin'>
          <label htmlFor='last-name'>Last Name</label>
          <input
            className='input-field'
            type='text'
            id='last-name'
            value={lastName}
            onChange={handleLastName}
          ></input>
        </div>
        <button className='submit-acc' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
