import { useState, useEffect } from 'react';
import Masina from './Masina';

function Amount({ person, setPerson }) {
  const [balance, setBalance] = useState(0);
  const handleBalance = (event) => {
    setBalance(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setBalance('');
  };

  const [negativeMoney, setNegativeMoney] = useState(false);

  const handleButtonClick = () => {
    setNegativeMoney(true);

    setTimeout(() => {
      setNegativeMoney(false);
    }, 3000);
  };

  return (
    <div className='money-bin'>
      <form className='amount-toChange' onSubmit={submitHandler}>
        <div className='money-label'>
          <label htmlFor='money'>Amount</label>
          <input
            className='money'
            id='money'
            type='text'
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
            Number(person.balance) - Number(balance) >= 0
              ? (person.balance = Number(person.balance) - Number(balance))
              : handleButtonClick()
          }
        >
          -
        </button>
      </form>
      {person.balance}
      {negativeMoney ? <Masina></Masina> : null}
    </div>
  );
}

export default Amount;
