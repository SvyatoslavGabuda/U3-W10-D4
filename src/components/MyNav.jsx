import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const MyNav = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Job Searcher</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                <span className="nav-link">Home</span>
              </Link>
              <Link to="/favorites" className="nav-link">
                <span className="nav-link">Favorites</span>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default MyNav;
