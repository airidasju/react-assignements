import { useState, useEffect } from 'react';


function List({ person, setPerson }) {

  const [balance, setBalance] = useState('');
  const handleBalance = (event) => {
    setBalance(event.target.value);
  };

  const submitHandler = (e) => {
    console.log("asd")
    e.preventDefault();
    setBalance("")
  };

  return (
    <ul>
      {person.map((p) => (
        <li className='single-client' key={p.id}>
          <div>
            {p.name} {p.lastName}
          </div>
          <div className='money-bin'>
              <form className='amount-toChange' onSubmit={submitHandler}>
              <div className='money-label'>
                <label htmlFor='money'>Amount</label>
                <input className='money' id='money' type='text' onChange={handleBalance}></input>
              </div>
              <button className='money-btn add' onClick={() => p.balance = balance}>+</button>
              <button className='money-btn remove' onClick={() => p.balance = p.balance - balance}>-</button>
              </form>
            {p.balance}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
