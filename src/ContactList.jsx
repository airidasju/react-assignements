function List({ person }) {
  return (
    <ul>
      {person.map((p) => (
        <li className='single-client' key={p.id}>
          {p.name} {p.lastName}
        </li>
      ))}
    </ul>
  );
}

export default List;
