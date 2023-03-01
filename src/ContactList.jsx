import { useState, useEffect } from 'react';
import Amount from './Amount';

function List({ person, setPerson }) {
  return (
    <ul>
      {person.map((p) => (
        <li className='single-client' key={p.id}>
          <div>
            {p.name} {p.lastName}
          </div>
          <Amount person={person}></Amount>
        </li>
      ))}
    </ul>
  );
}

export default List;
