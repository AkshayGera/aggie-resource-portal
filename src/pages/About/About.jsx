import React from "react";
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import profileimage from '../../components/ProfilePicture/profile-picture.png';
import Blurb from '../../components/Blurb/Blurb';
import Navigation from '../../components/Navigation/Navigation';
import './About.css';
import harsh from '../../media/harsh.png';
import urmika from '../../media/urmika.jpg';
import akshay from '../../media/akshay.png';
import ranj from '../../media/ranj.jpg';
import manaswini from '../../media/manaswini.jpg';

function About() {
  const teamMembers = [
    {
      name: 'Akshay Gera',
      image: akshay,
    },
    {
      name: 'Harsh Chaudhari',
      image: harsh,
    },
    {
      name: 'Urmika Koul',
      image: urmika,
    },
    {
      name: 'Ranjani Ramanathan',
      image: ranj,
    },
    {
      name: 'Manaswini Devabhakthuni',
      image: manaswini,
    },
  ];
  return (<div>
    <main>
      <div className='top'>
        <Navigation />
        <ProfilePicture image={profileimage} className="topItem" />
        {/* <Blurb className="topItem"/> */}

      </div>
      <div className="about-us-container">
        <h2 className="mission">Our Mission</h2>
        <p>Our mission is to create platforms that are user-friendly and innovative that strive to address real-world problems faced by students. We aim to communicate effectively and support each other to achieve our shared goal of making a positive impact by embodying “selfless service”. </p>

        <h2>Team Members</h2>
        <div className="team-members-container">
          {teamMembers.map(member => (
            <div key={member.name} className="team-member">
              <img className="memberimg" src={member.image} alt={member.name} />
              <p className="member-name">{member.name}</p>
            </div>
          ))}
        </div>

        <h2>Why Trust Us?</h2>
        <p>Trust Aggie Resource Portal to provide accurate and reliable resources shared by Texas A&M Aggies and locals who embody the value of selfless service and are committed to helping students succeed. Our platform is designed to address real-world problems faced by students and is grounded in our own experiences. Don't hesitate to reach out for any questions or support you may need. We are always here to help our fellow and incoming students.</p>

        <h3>Contact Us</h3>
        <div className="contact-us-container">
          <p>Email: contact@company.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </main>
  </div>);
}

export default About;