import React from "react";
import FoodForm from "../../../components/FoodForm/FoodForm";
import OldListings from "../../../components/OldListing/OldListing";
import Food1 from '../../../media/Food1.jpeg';
import Salad from '../../../media/salad.png';
import Spag from '../../../media/spag.png';
import { Row, Container, Col } from 'react-bootstrap';

function FoodFormSection() {
    const foodListings = [{
        name: 'Leftover Pizza',
        image: Food1
      },
      {
        name: 'Salad',
        image: Salad
      },
      {
        name: 'Spaghetti',
        image: Spag
      }];
    return (<>
    <Container>
    <Row>
            <Col>
                <FoodForm />
            </Col>
            <Col>
                <OldListings listings={foodListings}/>
            </Col>

        </Row>
    </Container>

    </>);
}

export default FoodFormSection;