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
    '@media (minWidth: 992px)': {
      width: '150%'
    }},
    
}
    


function Home() {
  return (
   
    <Container fluid className='pb-4' id='Home'>
      <Row lg={12}  className='p-4' style={{backgroundImage: `url(${background})` }}>
        <Col lg={6}>
            <h1 style={{fontWeight: 'bold', fontSize: 58, width: '100%'}}>Welcome to <br/>Global Choice</h1>
        <Row style={{width: '100%'}}>
            <Col lg={20}>
                <p className='mt-4'>This training will equip you with all the necessary skills and help you feel confident in your role before cruise ship. Specifically designed to prepare students for careers in the hospitality and cruise ship industries, providing specialized knowledge and practical training that can be directly applied in the workplace.</p>
            </Col>
            <Row className="d-flex  mt-3">
  <Col xs={12} md={8} className="d-flex " style={{marginLeft: 10, marginBottom: 20}}>
    <Button variant="primary" size='md' href='#different'>Get Started</Button>
    <Button variant="danger" style={{marginLeft: 15, width: 100,  }}><a href='mailto:gccruiseshiptraining@gmail.com' style={{textDecoration: "none", color: 'white'}}>Email</a></Button>
  </Col>
</Row>

      
        </Row>

        </Col> 
        <Col lg={6}>
            <Image src={homeImg} rounded='false' style={styles.image} />
        </Col>
       
      </Row>

    <Row className='pt-5' id='different'>
        <Col xs={12} className='text-center' ><h2 style={{fontWeight: 'bold'}}>Why We Are Different From Others?</h2></Col>
    
    <Row className='pt-4 px-4'>
        <Col xs={12} className='text-center' >
          <p>We Personalize our service to the needs of each and every guest.<br/> 
          We know what they want even before they do. We are experts at what we do and our knowledge goes beyond our specific role or department <br/>
          we bring the very best of ourselves in everything we do. We value real smiles, real interactions and real conversations</p>
          <p></p>
        </Col>
        {/* <Col xs={4} className='text-center' >
          <h3>Personalized</h3>
        </Col>
        <Col xs={4} className='text-center' >
          <h3>Personalized</h3>
        </Col> */}
        </Row>
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
    </Container>
   
  );
}

export default Home;
