import React,{useState, useEffect} from "react";
import Filters from "../../../components/Filters/Filters";
import Listings from "../../../components/Listings/Listings";
import moment from "moment";
import house1 from '../../../media/house1.jpg';
import apt from '../../../media/apt.png';
import couch from '../../../media/couch.png';
import house2 from '../../../media/house2.jpg';
import house3 from '../../../media/house3.jpeg'

const AccListing = (props) => {

    const accommodationListings = [
        {
          image: apt,
          title: 'Cozy Apartment in the City Center',
          description: 'This spacious and comfortable apartment is located in the heart of the city, within walking distance of all the main attractions and amenities.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'male',
          type:'acc'
        },
        {
          image: house1,
          title: 'Charming House in the Countryside',
          description: 'Escape to the peace and quiet of the countryside in this lovely house with stunning views and a beautiful garden.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'male',
          type:'acc'
        },
        {
          image: couch,
          title: 'As Single couch available in a cozy apartment',
          description: 'Perfect for crashing for a night or two, this couch is available if you are on the go and need a place quickly.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'male',
          type:'acc'
        },
        {
          image: house2,
          title: 'Quaint Cottage by the Sea',
          description: 'Enjoy a peaceful and idyllic stay in this charming cottage by the sea, surrounded by beautiful scenery and the sound of the waves.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'female',
          type:'acc'
        },
        {
          image: house3,
          title: 'Modern Loft in the Trendy Neighborhood',
          description: 'Experience the vibrant and creative atmosphere of the city in this stylish loft located in the heart of the trendiest neighborhood.',
          dateFrom: new Date('2022-03-28T10:00:00Z'),
          dateTo: new Date('2022-04-01T10:00:00Z'),
          gender: 'female',
          type:'acc'
        },
      ];
    
      const [genderFilter,setGenderFilter] = useState('all');
      const [dateTo, setDateTo] = useState();
      const [dateFrom, setDateFrom] = useState();
      
    
      function handleGender(event){
        setGenderFilter(event.target.value);
      }

      function handleDateFromChange(event){
        setDateFrom(event.target.value);
      }

      function handleDateToChange(event){
        setDateTo(event.target.value);
      }
      console.log(typeof dateFrom + ' ' + typeof dateTo);
      const genderFilteredContent = accommodationListings.filter((item) => {
        
        if(genderFilter=="all") return true;
        return item.gender==genderFilter;
      });

      function isDateRangeWithinRange(startDate1, endDate1, startDate2, endDate2) {
        const start1 = new Date(startDate1);
        const end1 = new Date(endDate1);
        const start2 = new Date(startDate2);
        const end2 = new Date(endDate2);
        console.log(moment(start1).format('YYYY-MM-DD'));
        return start1 >= start2 && end1 <= end2;
      }
      
      

      const dateFilteredContent = genderFilteredContent.filter((item)=>{
        
        return isDateRangeWithinRange(dateFrom,dateTo,item.dateFrom,item.dateTo);
        
      });
      console.log('date filtered stuff'+' '+dateFilteredContent);
      //console.log(filteredContent);
    return(
        <>
            <Filters onGenderClick={handleGender} onDateFromChange={handleDateFromChange} onDateToChange={handleDateToChange} />
            <Listings listings={genderFilteredContent} />
        </>
    )
};

export default AccListing;






  
  