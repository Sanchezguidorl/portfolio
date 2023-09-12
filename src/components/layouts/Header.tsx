import { Navbar } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar id="Header" collapseOnSelect expand="lg" className="bg-magenDark border-bottom border-cyan">
      <Container className="">
        <Navbar.Brand href="#home" className="text-magenLight">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="d-flex justify-content-end">
          <Nav className="">
<Link to={'/'} className="text-magenLight fs-6 text-uppercase text-decoration-none px-3 py-2 brightness">Home</Link>
<Link to={'/'} className="text-magenLight fs-6 text-uppercase text-decoration-none px-3 py-2 brightness">Home</Link>
<Link to={'/'} className="text-magenLight fs-6 text-uppercase text-decoration-none px-3 py-2 brightness">Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  );
}

export default Header;
