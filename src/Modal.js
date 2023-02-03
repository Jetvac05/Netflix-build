import React, { useState } from 'react'
import "./Modal.css"

function Modal() {
    const {modal, setModal} = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <div className="modal">
        <div className="modal__overlay">
            <div className="modal__content">
                <h2>Hello Modal</h2>
                <p></p>
            </div>
            <button className="close__modal" onClick={toggleModal}>Close
            </button>
        </div>
    </div>
  )
}

export default Modal
