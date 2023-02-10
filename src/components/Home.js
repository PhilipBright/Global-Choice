import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import homeImg from '../assets/home.jpg';
import Button from 'react-bootstrap/Button';
import abroad from '../assets/AbroadStudy.jpeg';
import training from '../assets/training.jpeg';
import career from '../assets/career.jpeg';
import franchise from '../assets/franchise.jpeg';
import background from '../assets/GCBG.avif'

const styles = {
  image: {
    width: '100%',
    maxWidth: '100%',
    '@media (min-width: 992px)': {
      width: '150%'
    }},
    
}
    


function Home() {
  return (
   
    <Container fluid className='pb-4'>
      <Row lg={12}  className='p-4' style={{backgroundImage: `url(${background})` }}>
        <Col lg={6}>
            <h1 style={{fontWeight: 'bold', fontSize: 58, width: '100%'}}>Welcome to <br/>Global Choice</h1>
        <Row style={{width: '100%'}}>
            <Col lg={20}>
                <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been t 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been t 1960s with the</p>
            </Col>
            <Row className="d-flex  mt-3">
  <Col xs={12} md={8} className="d-flex " style={{marginLeft: 10, marginBottom: 20}}>
    <Button variant="primary" size='md'>Get Started</Button>
    <Button variant="danger" style={{marginLeft: 15, width: 100}}>Email</Button>
  </Col>
</Row>

      
        </Row>

        </Col> 
        <Col lg={6}>
            <Image src={homeImg} rounded='false' style={styles.image} />
        </Col>
       
      </Row>

    <Row className='pt-5'>
        <Col xs={12} className='text-center' ><h2 style={{fontWeight: 'bold'}}>Why We Are Different From Others?</h2></Col>
    
    <Row className='pt-4'>
        <Col xs={12} className='text-center' ><p style={{paddingLeft: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been t 1960s with the release of Letraset sheets containing  <br/>
         Lorem Ipsum is simply dummy text of the printing an
         Lorem Ipsum has been t 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p></Col>
     <Row xs={1} md={2} className='d-flex justify-content-center g-4' style={{paddingLeft: 50}}>
            <Col xs={6} md={2} lg={2} className="d-flex flex-column align-items-center"> 
                <Image src={abroad} roundedCircle='false' width={100} height={100} className="mb-3" ></Image>
                <p className="text-center">Abroad</p>
            </Col>
            <Col xs={6} md={2} lg={2} className="d-flex flex-column align-items-center"> 
                <Image src={training} roundedCircle='false' width={100} height={100} className="mb-3" style={{marginLeft: 20}}></Image>
                <p className="text-center" style={{marginLeft: 20}}>Training</p>
            </Col>
            <Col xs={6} md={2} lg={2} className="d-flex flex-column align-items-center"> 
                <Image src={career} roundedCircle='false' width={100} height={100} className="mb-3" ></Image>
                <p className="text-center">Career</p>
            </Col>
            <Col xs={6} md={2} lg={2} className="d-flex flex-column align-items-center"> 
                <Image src={franchise} roundedCircle='false' width={100} height={100} className="mb-3" style={{marginLeft: 20}}></Image>
                <p className="text-center" style={{marginLeft: 20}}>Franchise</p>
            </Col>
      </Row>



    </Row>
    </Row>
    </Container>
   
  );
}

export default Home;
