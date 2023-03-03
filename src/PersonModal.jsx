function PersonModal({savedName, savedLastName}) {
        
    return <div className='insufficient'>
        <span>Created new user</span>
        <span>{savedName} {savedLastName}</span>
        </div>;
  }
  
  export default PersonModal;
  