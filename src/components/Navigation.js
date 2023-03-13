import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.jpg';
import Image from 'react-bootstrap/Image';
import Home from './Home';




function Navigation() {
  return (
    <Navbar expand="lg" bg="warning" className='ps-4 pe-4 sticky-top ' style={{ }} >
      <Container fluid>
        <Navbar.Brand href={Home}>
          <Image src={logo} roundedCircle="false" width={40}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ps-3" >
          <Nav.Link  className='ps-4' href='#Home'>Home</Nav.Link>
            <Nav.Link  href='#course' className='ps-4'>Courses</Nav.Link>
            <Nav.Link href='#Job'  className='ps-4'> Job Opportunties</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href='#Contact'>Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;