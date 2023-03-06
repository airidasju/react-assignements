import { useEffect, useState } from 'react';

function Summary({ person }) {
  const [allMoney, setAllMoney] = useState(0);

  useEffect(() => {
    if (person.length < 1) {
      return;
    } else if (person.length === 1) {
      setAllMoney(person[0].balance);
    } else {
      setAllMoney(person.reduce((a, b) => a.balance + b.balance));
    }
  }, [person]);

  return (
    <div className='summary'>
      <div>
        <span>Total people : {person.length}</span>
      </div>
      <div>
        <span>Total money : {allMoney} </span>
      </div>
    </div>
  );
}

export default Summary;
