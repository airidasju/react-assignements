import Amount from './Amount';
import NotEmptyPop from './NotEmptyPop';

const [negativeMoney, setNegativeMoney] = useState(false);


const handleNotEmpty = () => {
  setNegativeMoney(true);

  setTimeout(() => {
    setNegativeMoney(false);
  }, 3000);
};

function List({ person, setPerson }) {
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
                  : null
              }
            >
              Delete
            </button>
          </div>
          <Amount person={p}></Amount>
        </li>
      ))}
    </ul>
  );
}

export default List;
