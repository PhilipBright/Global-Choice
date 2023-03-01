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
              Food and Beverage service department is one of the main service oriended and crucial division of the hotel.
              It renders the services prepared food items, beverages, and tobacco in a hospitable way to the customer as per their demand.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card className='ps-3 pt-3 pe-3 me-3 mb-4' style={{borderRadius: 10}}>
        <Card.Img variant="top" src={Bar} style={styles.cardImage} rounded='false'/>
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>Bartender Course</Card.Title>
          <Card.Text>
          A bartender is a person who works in a bar, pub, nightclub, or other establishment that serves alcoholic beverages. 
          The primary responsibility of a bartender is to prepare and serve drinks to customers while also ensuring that they have an enjoyable experience.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card className='ps-3 pt-3 pe-3 me-3 mb-4' style={{borderRadius: 10}}>
        <Card.Img variant="top" src={HK} style={styles.cardImage}  />
        <Card.Body>
          <Card.Title style={{fontWeight: 'bold'}}>HouseKeeping & Laundary Course</Card.Title>
          <Card.Text>
          In a hotel or other hospitality setting, housekeeping involves ensuring that guest rooms are clean and stocked with fresh linens, towels, and other amenities.
           Housekeepers may also be responsible for responding to guest requests and addressing any issues or concerns they may have.
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
          In a commercial kitchen or galley, food safety is a critical concern, as large quantities of food are prepared and served to many people.
           Kitchen staff are trained in food safety practices to prevent cross-contamination, bacterial growth, and other hazards that can cause foodborne illness.
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
