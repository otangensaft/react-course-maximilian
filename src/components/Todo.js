import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop'

const Todo = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }


  return (
    <div>
      <div className='card'>
        <h2>{title}</h2>
        <div className="actions">
          <button className="btn" onClick={openModal}>Delete</button>
        </div>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalIsOpen && <Backdrop onClick={closeModal} />}
    </div>
  )
}

export default Todo