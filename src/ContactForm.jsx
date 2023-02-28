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



  const onSubmit = (e) => {
    e.preventDefault();
    if(name < 3) {
      
    }
    setLastName("")
    setName("")
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
        <button
          className='submit-acc'
          type='submit'
          onClick={() => name.length > 3 && lastName.length > 3 ? addPerson(name, lastName): null}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
