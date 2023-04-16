import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
// import TextPrompt from './components/TextPrompt/TextPrompt';
// import AccListings from './modules/Seeking/Accommodation/AccListings';
import './style.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
// import ProfilePicture from './components/ProfilePicture/ProfilePicture';
// import profileimage from './components/ProfilePicture/profile-picture.png';
// import Blurb from './components/Blurb/Blurb';
// import Navigation from './components/Navigation/Navigation';
// import FoodListing from './modules/Seeking/Food/FoodListing';
// import AccForm from './modules/Providing/Accommodation/AccForm';
// import FoodForm from './modules/Providing/Food/FoodForm';

function App() {
 
  return (
    <div>
     <Header/>
     <Router>
      <Routes>
        <Route exact path="/" element={Home()} />
        <Route path="/about" element={About()} />
        {/* <Route path="/contact" component={Contact} />
        <Route component={NotFound} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
