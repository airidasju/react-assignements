import { useState, useEffect } from 'react';

function Amount({ person, setPerson }) {
  const [balance, setBalance] = useState('');
  const handleBalance = (event) => {
    setBalance(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setBalance('');
  };

  return (
    <div className='money-bin'>
      <form className='amount-toChange' onSubmit={submitHandler}>
        <div className='money-label'>
          <label htmlFor='money'>Amount</label>
          <input
            className='money'
            id='money'
            type='number'
            value={balance}
            onChange={handleBalance}
          ></input>
        </div>
        <button
          className='money-btn add'
          onClick={() =>
            (person.balance = Number(person.balance) + Number(balance))
          }
        >
          +
        </button>
        <button
          className='money-btn remove'
          onClick={() =>
            (person.balance = Number(person.balance) - Number(balance))
          }
        >
          -
        </button>
      </form>
      {person.balance}
    </div>
  );
}

export default Amount;
