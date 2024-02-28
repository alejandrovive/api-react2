import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Error() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} md={6} className="text-center">
          <h1 className="display-1 text-danger">Error 404</h1>
          <p className="lead">¡Oh no! Parece que te has perdido en la página.</p>
          <p>Vuelve al home y sigue disfrutando de uno de los mejores grupos de siempre.</p>
          <Button as={Link} to="/" className='mi-boton'>Volver al home</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Error;
