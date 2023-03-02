import Amount from './Amount';
import NotEmptyPop from './NotEmptyPop';
import { useState } from 'react';
import DelConfirm from './DelConfirm';

function List({ person, setPerson }) {


  const [notEmpty, setNotEmpty] = useState(false);


  const handleNotEmpty = () => {
    setNotEmpty(true);
  
    setTimeout(() => {
      setNotEmpty(false);
    }, 3000);
  };


  const [delConfirm, setDelConfirm] = useState(false);


  const handleDelConfirm = (el) => {
    console.log(el)
    setDelConfirm(true);
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
                  ? handleDelConfirm(p)
                  : handleNotEmpty()
              }
            >
              &#9746;
            </button>
            {
              delConfirm ? <DelConfirm setPerson={setPerson} setDelConfirm={setDelConfirm} p={p}></DelConfirm> : null
            }
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
