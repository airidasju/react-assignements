import './App.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function ContactForm({ addPerson }) {
  const [name, setName] = useState('');
  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const [lastName, setLastName] = useState('');
  const handleLastName = (event) => {
    event.preventDefault();
    setLastName(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='all-clients' onSubmit={onSubmit}>
      <form className='form'>
        <div className='input-bin'>
          <label htmlFor='name'>First name</label>
          <input
            className='input-field'
            type='text'
            id='name'
            onChange={handleName}
          ></input>
        </div>
        <div className='input-bin'>
          <label htmlFor='last-name'>Last Name</label>
          <input
            className='input-field'
            type='text'
            id='last-name'
            onChange={handleLastName}
          ></input>
        </div>
        <button
          className='submit-acc'
          type='submit'
          onClick={() => addPerson(name, lastName)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
