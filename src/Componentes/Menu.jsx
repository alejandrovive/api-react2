import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Estilos/_menu.scss";


function Menu() {
  return (
    <>
      <Navbar className='custom' data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/" className='brand'>The Cure</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/video">Video</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;