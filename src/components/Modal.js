const Modal = ({ onCancel, onConfirm }) => {
  const cancelHandler = () => {
    onCancel();
  }
  const confirmHandler = () => {
    onConfirm();
  }
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn' onClick={cancelHandler}>Cancel</button>
      <button className='btn btn--alt' onClick={confirmHandler}>Confirm</button>
    </div>
  )
}

export default Modal