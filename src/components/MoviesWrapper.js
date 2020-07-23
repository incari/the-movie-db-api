import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export const MoviesWrapper = ({ children }) => {
  return (
    <Container fluid className='justify-content-center'>
      <Row className='justify-content-center'>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};
