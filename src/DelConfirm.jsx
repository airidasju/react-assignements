import DeleteModal from './DeleteModal';
import { useState } from 'react';
import DeletedModal from './DeletedModal';

function DelConfirm({ setPerson, setDelConfirm, p }) {
  const [deleteModal, setDeleteModal] = useState(false);

  const delModalHandler = () => {
    setDeleteModal(true);
    setTimeout(() => {
      setDeleteModal(false);
    }, 3000);
  };

  const [deletePop, setDeletePop] = useState(false);
  const [savedDeleted, setSavedDeleted] = useState({});

  const delAcceptHandler = (el) => {
    setSavedDeleted({ name: el.name, lastName: el.lastName });
    setDeletePop(true);
    setTimeout(() => {
      setDeletePop(false);
    }, 3000);

    setPerson((pers) => pers.filter((pers) => pers.id !== el.id));
    setDelConfirm(false);
    delModalHandler();
    el.deleting = false;
  };

  const delCancelHandler = (el) => {
    setDelConfirm(false);
    el.deleting = false;
  };

  return (
    <>
      <div className='del-confirm'>
        <span>Are you sure?</span>
        <div style={{ display: 'flex', gap: '30px' }}>
          <button
            className='del-confirmBtn accept'
            onClick={() => delAcceptHandler(p)}
          >
            Yes
          </button>
          <button
            className='del-confirmBtn deny'
            onClick={() => delCancelHandler(p)}
          >
            No
          </button>
        </div>
      </div>
      {deleteModal ? <DeleteModal></DeleteModal> : null}
      {deletePop ? <DeletedModal person={savedDeleted}></DeletedModal> : null}
    </>
  );
}

export default DelConfirm;
