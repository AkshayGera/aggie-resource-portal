import React from "react";
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import profileimage from '../../components/ProfilePicture/profile-picture.png';
import Navigation from '../../components/Navigation/Navigation';
import RequestStayForm from "../../components/RequestStayForm/RequestStayForm";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Container,Row,Col } from "react-bootstrap";
import house1 from '../../media/house1.jpg';
import './RequestStay.css';
import { useLocation } from "react-router-dom";

function RequestStay(){
    //  const { prop1 } = props.location.state;
    const location = useLocation();
    const {prop1} = location.state;
     console.log(JSON.stringify(prop1))
   const accommodationListing = 
    {
      image: house1,
      title: 'Cozy Apartment in the City Center',
      description: 'This spacious and comfortable apartment is located in the heart of the city, within walking distance of all the main attractions and amenities.',
      dateFrom: new Date('2022-03-28T10:00:00Z'),
      dateTo: new Date('2022-04-01T10:00:00Z'),
      gender: 'male',
      type:'acc'
    };
    return (<div>
        <main>
          <div className='top'>
            <Navigation />
            <ProfilePicture image={profileimage} className="topItem" />
          </div>
          
        <Container >
            <Row className="content">
                <Col>
                <RequestStayForm/>
                </Col>
                <Col>
                <DetailsCard details={prop1}/>
                </Col>
            </Row>
        </Container>
          </main>
          </div>);
}

export default RequestStay;