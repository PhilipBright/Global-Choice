import FB from '../assets/F&B.webp';
import Bar from '../assets/Bar.jpeg';
import HK from '../assets/HK.jpg';
import Eng from '../assets/English.jpeg';
import Galley from '../assets/Galley.jpeg';
import German from '../assets/German.jpeg';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Background from '../assets/GCBG.jpeg'


const styles = {
    cardImage: {
     
      objectFit: 'fit',
      borderRadius: 5
      ,
      // @media only screen and (max-width: 600px)
      // '@media (max-width: 600px)': {
      //   width: 335,
      //   height: 250
      // },
      // '@media (min-width: 1200px)': {
      //   width: 400,
      //   height: 300
      // }
    }
    
  };
function GroupExample() {
  return (
    <Container fluid style={{backgroundImage: `url(${Background})`}}>
      {/* Header */}
      <Row>
        <Col xs={12} className='text-center pt-5'> <h2 style={{fontWeight: 'bold', color: '#ffffff'}}>Our Most Popular & Demanded Courses</h2></Col>
      </Row>
      <Row>
        <Col xs={12} className='text-center pt-3 pb-3'> <p style={{color: '#ffffff'}}>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text of the printing and typesetting  </p></Col>
      </Row>
      {/* cards */}
    <CardGroup className='pe-4 ps-5'>
      <Card className='ps-3 pt-3 pe-3 me-3 mb-4' style={{borderRadius: 10}}>
        <Card.Img variant="top" src={FB} style={styles.cardImage} rounded='false' />
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>Food & Beverage Course</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='ps-3 pt-3 pe-3 me-3 mb-4' style={{borderRadius: 10}}>
        <Card.Img variant="top" src={Bar} style={styles.cardImage} rounded='false'/>
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>Bartender Course</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='ps-3 pt-3 pe-3 me-3 mb-4' style={{borderRadius: 10}}>
        <Card.Img variant="top" src={HK} style={styles.cardImage}  />
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>HouseKeeping & Laundary Course</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      
      </Card>
      
      
    </CardGroup>
    <CardGroup className='pe-4 ps-5'>
    <Card className='ps-3 pt-3 pe-3 me-3 mb-4' style={{borderRadius: 10}}>
        <Card.Img variant="top" src={Galley} style={styles.cardImage} />
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>Food Safety & Galley Steward Course</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='ps-3 pt-3 pe-3 me-3 mb-4' style={{borderRadius: 10}} >
        <Card.Img variant="top" src={Eng} style={styles.cardImage} />
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>English Class</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
       
      </Card>
      
      <Card className='ps-3 pt-3 pe-3 me-3 mb-4' style={{borderRadius: 10}}>
        <Card.Img variant="top" src={German} style={styles.cardImage} />
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>German Class</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      </CardGroup>
      </Container>
  );
}
export default GroupExample;
