import React from 'react';
import './modal.css'
function modal({setSubmitted}) {

    const handleClose = () =>{
        setSubmitted(false)
    }
  return <div className='modal'>
      <div className="modal_container">
          <h2>Thank you!</h2>
          <p>Your form is submitted. We will come to your request and contact you as soon as possible </p>
          <button onClick={handleClose}> Close </button>
      </div>
  </div>;
}

export default modal;
