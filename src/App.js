import React,{useState} from 'react';
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';
import TextPrompt from './components/TextPrompt/TextPrompt';
import AccListings from './modules/Seeking/Accommodation/AccListings';
import './style.css';

function App() {
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
    <div>
     <Header/>
      <main>
       <TextPrompt onServiceChange={handleServiceChange} onCategoryChange={handleCategoryChange}/>
        {service=='seeking'?category=='accommodation'?<AccListings/>:<></>:<></>}
        
      </main>
    </div>
  );
}

export default App;
