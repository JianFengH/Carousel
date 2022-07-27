import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
};
Modal.defaultProps = {
  visible: false,
};

export default function Modal({ visible, onClose, children }) {
  if (!visible) {
    return;
  }
  return <div className='modal-wrapper'>
    <div className='modal-mask' onClick={() => onClose()}></div>
    <div className='modal-content'>
      <div className='modal-header'>
        <button onClick={() => onClose()}>Close</button>
      </div>
      <div className='modal-body'>
        {children}
      </div>
    </div>
  </div>
}