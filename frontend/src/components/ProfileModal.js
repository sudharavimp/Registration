import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ProfileModal = (props) => { 
    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
              <Modal.Header closeButton>
                 <Modal.Title>Profile</Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
              <Modal.Footer>
                 <Button variant="danger" onClick={props.handleModalOpen}>
                    Cancel
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default ProfileModal;