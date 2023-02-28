function List({ person }) {
  return (
    <ul>
      {person.map((p) => (
        <li className='single-client' key={p.id}>
          <div>
            {p.name} {p.lastName}
          </div>
          <div className='money-bin'>
            <div className='amount-toChange'>
              <div className='money-label'>
                <label htmlFor='money'>Amount</label>
                <input className='money' id='money' type='number'></input>
              </div>
              <button className='money-btn add'>+</button>
              <button className='money-btn remove'>-</button>
            </div>
            {p.balance}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
