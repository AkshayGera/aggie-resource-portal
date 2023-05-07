import React from "react";
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import profileimage from '../../components/ProfilePicture/profile-picture.png';
import { Container,Row,Col } from "react-bootstrap";
import Navigation from '../../components/Navigation/Navigation';
import './Help.css'
import FAQ from '../../components/FAQ/FAQ';
import ContactForm from "../../components/ContactForm/ContactForm";

function Help() {
    return (<div>
        <main>
            <div className='top'>
                <Navigation />
                <ProfilePicture image={profileimage} className="topItem" />
            </div>
            <Container >
            <Row className="content">
                <Col>
                <ContactForm />
                </Col>
                <Col className="faq">
                <FAQ />
                </Col>
            </Row>
        </Container>
        </main>
    </div>)
}

export default Help;