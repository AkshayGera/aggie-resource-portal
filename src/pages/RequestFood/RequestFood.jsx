import React from "react";
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import profileimage from '../../components/ProfilePicture/profile-picture.png';
import Navigation from '../../components/Navigation/Navigation';
import RequestFoodForm from "../../components/RequestFoodForm/RequestFoodForm";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import { Container,Row,Col } from "react-bootstrap";
import food1 from '../../media/Food1.jpeg';
import './RequestFood.css';
import { useLocation } from "react-router-dom";

function RequestFood(){
    const foodListing = { "image": food1, "title": "Leftover pizza", "description": "Two slices of pepperoni pizza, still in good condition", "dateFrom": "2023-04-15", "dateTo": "2023-04-16", "type": "food", "diet": "none" };
    //  const { prop1 } = props.location.state;
    const location = useLocation();
    const {prop1} = location.state;
    console.log(JSON.stringify(prop1))
    return (<div>
        <main>
          <div className='top'>
            <Navigation />
            <ProfilePicture image={profileimage} className="topItem" />
          </div>
          
        <Container >
            <Row className="content">
                <Col>
                <RequestFoodForm/>
                </Col>
                <Col>
                <DetailsCard details={prop1}/>
                </Col>
            </Row>
        </Container>
          </main>
          </div>);
}

export default RequestFood;