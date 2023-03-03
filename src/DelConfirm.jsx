import DeleteModal from './DeleteModal';
import { useState } from 'react';

function DelConfirm({ setPerson, setDelConfirm, p }) {
  
  const [deleteModal, setDeleteModal] = useState(false)

  const delModalHandler = () => {
    setDeleteModal(true);
    setTimeout(() => {
      setDeleteModal(false);
    }, 3000);
  };
  
  const delAcceptHandler = (el) => {
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
        <div style={{ display: 'flex', gap: '5px' }}>
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
    </>
  );
}

export default DelConfirm;