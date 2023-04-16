import React,{useState} from 'react';
import Filters from '../../components/Filters/Filters';
import Header from '../../components/Header/Header';
import TextPrompt from '../../components/TextPrompt/TextPrompt';
import AccListings from '../../modules/Seeking/Accommodation/AccListings';
import './Home.css';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import profileimage from '../../components/ProfilePicture/profile-picture.png';
import Blurb from '../../components/Blurb/Blurb';
import Navigation from '../../components/Navigation/Navigation';
import FoodListing from '../../modules/Seeking/Food/FoodListing';
import AccForm from '../../modules/Providing/Accommodation/AccForm';
import FoodForm from '../../modules/Providing/Food/FoodForm';

function Home() {
  const [service, setService] = useState("seeking");
  const [category, setCategory] = useState("accommodation");

  function handleServiceChange(event){
    setService(event.target.value);
  }

  function handleCategoryChange(event){
    setCategory(event.target.value);
  }
  console.log(service + ' ' + category);
  return (
    <>
    <div>
      <main>
      <div className='top'>
          <Navigation />
          <ProfilePicture image={profileimage} className="topItem"/>
        <Blurb className="topItem"/>
       
          </div>
        
       <TextPrompt onServiceChange={handleServiceChange} onCategoryChange={handleCategoryChange}/>
        {service=='seeking'?category=='accommodation'?<AccListings/>:<FoodListing/>:category=="accommodation"?<AccForm/>:<FoodForm/>}
        
      </main>
    </div>
    </>
  );
}

export default Home;
