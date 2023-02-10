import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg'
import Image from 'react-bootstrap/Image'

function Navigation() {
  return (
    <Navbar NavigationOnSelect expand="lg" bg="warning" className='ps-4 pe-4 sticky-top' style={{ height: 60}} >
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image src={logo} roundedCircle="false" width={40}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ps-3" >
          <Nav.Link href="#courses" className='ps-4'>Home</Nav.Link>
            <Nav.Link href="#courses" className='ps-4'>Courses</Nav.Link>
            <Nav.Link href="#jobOpportunties" className='ps-4'>Job Opportunties</Nav.Link>
            <Nav.Link href="#about" className='ps-4'>About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;