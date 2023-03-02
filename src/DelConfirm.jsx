function DelConfirm({setPerson, setDelConfirm, p}) {

    const delHandler = (el) => {
        setPerson((pers) => pers.filter((pers) => pers.id !== el.id));
        console.log(el)
        setDelConfirm(false);
    }

    return (
        <>
            
            <div className='del-confirm'>
                <span>Are you sure?</span>
                <div style={{display: 'flex', gap: "5px"}}>
                    <button className='del-confirmBtn accept' onClick={() => delHandler(p)}>Yes</button>
                    <button className='del-confirmBtn deny' onClick={() => setDelConfirm(false)}>No</button>
                </div>
            </div>
        </>

    )
  }
  
  export default DelConfirm;
  