import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/esm/Image';
import job from '../assets/jobs.jpg';
import requirement from '../assets/requirement.jpg';

function Job() {
  return (
    
        <Container >
           

            <Row >
                <Col>
                <h2 className='text-center mt-5 fw-bold'>Job Opportunties</h2>
                </Col>
            </Row>
            <Row className='px-3'>
                <Col>
                <p className='text-center pt-3 pb-3'>Are you in search of a new and exciting opportunity working within the Hospitality and Cruise Ship Job? Do you want career progression and development? Then, our Training Center has a fantastic opportunity for you.
In order to provide efficiency on board a cruise ship, the ship's personnel is divided into three sections - the Deck, Engineering , and the Hotel. Cabin on cruise ship photo the Hotel Department includes everything that is related to the passenger section, just like 
in a regular Hotel or Resort.<br/> The Hotel Department is also divided into several sections for ease of fulfilling the various tasks. It includes Food and Beverage, Purse (accounting), Hotel Administration and the Housekeeping sections. 
In the Training Center of our growth we are looking for qualified and experienced Employees  to be based in Hospitality and any other operating base established.</p>

                </Col>
            </Row>
            <Row className='mt-3 d-flex '>
                <Col  >
                <Image src={job} width={"100%"} />
                    
                </Col>
                <Col sm={6} className='ps-5 '>
                <h4 >Hotel and Cruise Ship Vacancies Position </h4>
                    <ul>
                        <li>Bartender </li>
                        <li>Bar Utility </li>
                        <li>Bar Waiter/ Waitress </li>
                        <li>Restaurant Waiter/ Waitress </li>
                        <li>Housekeeping Cabin Steward/Stewardess </li>
                        <li>Laundry Attendant </li>
                        <li>Tailor and Line keeper </li>
                        <li>Galley Utility </li>
                        <li>Chef De Parties </li>
                        <li>Soup Chef</li>
                        <li>Baker Chef</li>
                        <li>Pastry Chef</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row className='mt-3'>
               
                <Col className='ps-5 '>
                <h4 className='pb-3'>To apply for this opportunity, you must meet the following minimum requirements:</h4>

                    <ul className='lh-lg'>
                        <li>CDC, All In One, Passport in hand.</li>
                        <li>Working experience in 4/5 Star Hotel at least 2 years.</li>
                        <li>Must be able to speak English fluently.</li>
                        <li>Between Age 21 and 35.</li>
                    </ul>
                    
                </Col>
                <Col lg={6}>
                    <Image src={requirement} width={"100%"}/>
                </Col>
            </Row>
          
        </Container>
  
  )
}

export default Job