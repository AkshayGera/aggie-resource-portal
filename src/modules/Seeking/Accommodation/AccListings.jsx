import React,{useState, useEffect} from "react";
import Filters from "../../../components/Filters/Filters";
import Listings from "../../../components/Listings/Listings";

const AccListing = (props) => {

    const accommodationListings = [
        {
          image: 1,
          title: 'Cozy Apartment in the City Center',
          description: 'This spacious and comfortable apartment is located in the heart of the city, within walking distance of all the main attractions and amenities.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'male',
          type:'acc'
        },
        {
          image: 2,
          title: 'Charming House in the Countryside',
          description: 'Escape to the peace and quiet of the countryside in this lovely house with stunning views and a beautiful garden.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'male',
          type:'acc'
        },
        {
          image: 3,
          title: 'Luxury Villa with Private Pool',
          description: 'Indulge in a luxurious and relaxing vacation in this stunning villa with a private pool and all the modern amenities you need.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'male',
          type:'acc'
        },
        {
          image: 4,
          title: 'Quaint Cottage by the Sea',
          description: 'Enjoy a peaceful and idyllic stay in this charming cottage by the sea, surrounded by beautiful scenery and the sound of the waves.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'female',
          type:'acc'
        },
        {
          image: 5,
          title: 'Modern Loft in the Trendy Neighborhood',
          description: 'Experience the vibrant and creative atmosphere of the city in this stylish loft located in the heart of the trendiest neighborhood.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'female',
          type:'acc'
        },
      ];
    
      const [genderFilter,setGenderFilter] = useState('all');
      const [datePicker, setDatePicker] = useState();
      
    
      function handleGender(event){
        setGenderFilter(event.target.value);
      }
    
      const filteredContent = accommodationListings.filter((item) => {
        //console.log(item.gender + ' ' +genderFilter);
        if(genderFilter=="all") return true;
        return item.gender==genderFilter;
      });

      //console.log(filteredContent);
    return(
        <>
            <Filters onGenderClick={handleGender} />
            <Listings listings={filteredContent} />
        </>
    )
};

export default AccListing;






  
  