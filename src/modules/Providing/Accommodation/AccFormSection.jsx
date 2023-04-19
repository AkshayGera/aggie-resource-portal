import React from "react";
import AccommodationForm from "../../../components/AccommodationForm/AccommodationForm";
import { Col, Container, Row } from "react-bootstrap";
import OldListing from "../../../components/OldListing/OldListing";
import house1 from '../../../media/house1.jpg';
import house2 from '../../../media/house2.jpg';
import house3 from '../../../media/house3.jpeg';

function AccForm(){
    const accListings = [{
        name: 'Cozy Apartment',
        image: house1
      },
      {
        name: 'Dorm',
        image: house2
      },
      {
        name: 'Room with attached toilet',
        image: house3
      }];
    return(<>
    <Container>
        <Row>
        <Col><AccommodationForm/></Col>
        <Col>
                <OldListing listings={accListings}/>
            </Col>
        </Row>
    </Container>
       
    </>);
}

export default AccForm;