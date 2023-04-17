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

function About(){
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
            image: manaswini    ,
          },
      ];
    return(<div>
    <main>
    <div className='top'>
          <Navigation />
          <ProfilePicture image={profileimage} className="topItem"/>
        {/* <Blurb className="topItem"/> */}
       
          </div>
          <div className="about-us-container">
      <h2 className="mission">Team Mission Statement</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h2>Team Members</h2>
      <div className="team-members-container">
        {teamMembers.map(member => (
          <div key={member.name} className="team-member">
            <img src={member.image} alt={member.name} />
            <p className="member-name">{member.name}</p>
          </div>
        ))}
      </div>
      
      <h2>Why Trust Us?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <h2>Contact Us</h2>
      <div className="contact-us-container">
        <p>Email: contact@company.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
    </main>
    </div>);
}

export default About;