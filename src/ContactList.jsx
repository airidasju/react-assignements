import Amount from './Amount';
import NotEmptyPop from './NotEmptyPop';
import { useState } from 'react';

function List({ person, setPerson }) {


  const [notEmpty, setNotEmpty] = useState(false);


  const handleNotEmpty = () => {
    setNotEmpty(true);
  
    setTimeout(() => {
      setNotEmpty(false);
    }, 3000);
  };


  return (
    <ul>
      {person.map((p) => (
        <li className='single-client' key={p.id}>
          <div className='client-name'>
            {p.name} {p.lastName}
            <button
              className='remove-user'
              onClick={() =>
                p.balance < 1
                  ? setPerson((pers) => pers.filter((pers) => pers.id !== p.id))
                  : handleNotEmpty()
              }
            >
              Delete
            </button>
          </div>
          <Amount person={p}></Amount>
          {
            notEmpty ? <NotEmptyPop></NotEmptyPop> : null}
        </li>
      ))}
    </ul>
  );
}

export default List;
