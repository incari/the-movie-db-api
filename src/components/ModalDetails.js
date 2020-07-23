import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export const ModalDetails = props => {
  const content = `If you want to hire me for any of my services, 
  tell me briefly about your project and I will contact you sooner than you expect 😉`;
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Send me a message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{content}</p>
        <form
          closeButton
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          {' '}
          <Form.Group controlId='modal_name'>
            <Form.Label>Name </Form.Label>
            <Form.Control type='text' placeholder='Maximus Decimus Meridius' />
          </Form.Group>
          <Form.Group controlId='modal_email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='maximus@FelixLegions.Rome'
            />
          </Form.Group>
          <Form.Group controlId='modal_content'>
            <Form.Label>Tell me your story</Form.Label>
            <Form.Control
              as='textarea'
              placeholder='What we do now echoes in eternity.'
              rows='3'
            />
          </Form.Group>
          <p>
            <Button variant='primary' type='submit'>
              <span style={{ color: 'white' }} role='img' aria-label='rocket'>
                🚀 Launch!
              </span>
            </Button>
          </p>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
