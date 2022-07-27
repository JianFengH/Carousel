import React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const MODAL_ROOT_ID = 'modal-root';
function getModalRootElement() {
  let root = document.getElementById(MODAL_ROOT_ID);
  if (!root) {
    root = document.createElement('div');
    root.id = MODAL_ROOT_ID;
    document.body.appendChild(root);
  }
  return root;
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element,
};
Modal.defaultProps = {
  visible: false,
};

export default function Modal({ visible, onClose, children }) {
  const modalRootEl = getModalRootElement();

  if (!visible) {
    return;
  }
  return ReactDOM.createPortal(
    <div className='modal-wrapper'>
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
    , modalRootEl);

}