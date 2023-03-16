import React, { useState } from 'react';
import '../styles/TravelForm.css';
import axios from 'axios';

let optimalHotel = {};
// const key = 'e9d5295d63msh5c3c1c8b97d453ep136326jsn3a73bbb483fb'

function TravelForm() {
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   axios.get("/local")
  // });
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const stayBudget = 0.4*budget;

  const handleSubmit = async(e) => {
    // e.preventDefault();
    console.log('Destination:', destination);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Budget:', budget);
    
    const places = {
        method: 'GET',
        url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchPlace',
        params: {query: destination},
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
        }
    };

    // axios.request(places).then(function (response) {
    //     const entityId = response.data[0].entityId;
    // }).catch(function (error) {
    //     console.error(error);
    // });
    
    try{
        const response = await axios.request(places);
        console.log(response);
        const entityId = response.data.data[0].entityId;
        const location = response.data.data[0].location;
        const lat_lon = location.split(',');
        const lat = lat_lon[0];
        const lon = lat_lon[1];

        console.log(entityId);
        console.log(location);

        const hotels = {
            method: 'GET',
            url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchHotel',
            params: {
                entityId: entityId,
                checkin: startDate,
                checkout: endDate,
                currency: 'INR',
            },
            headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
            }
        };
        
        // axios.request(hotels).then(function (response) {
        //   response.hotels[0].
        // }).catch(function (error) {
        //   console.error(error);
        // });
    
        // for (let i = 0; i < response.data.hotels.length; i++) {
        //     const hotel = response.data.hotels[i];
        //     if (hotel.price <= stay_budget) {
        //       const hotelid = hotel.hotelId;
        //       break; // 
        // }

        try{
            const response2 = await axios.request(hotels);
            console.log(response2);
            const filteredRes=response2.filter(el=>el.priceDescription!=="")
            const sorted_hotel_prices=filteredRes.sort(function(a, b) {
              // const priceA = parseInt(a.price?.replace(/[^\d]/g, ''));
              // const priceB = parseInt(b.price?.replace(/[^\d]/g, ''));
                return a.rawPrice - b.rawPrice;
              });
              let i=0;
              while(sorted_hotel_prices[i].rawPrice<=stayBudget){
                i++;
              }
            optimalHotel = sorted_hotel_prices[i-1];
            console.log(optimalHotel)
            console.log(sorted_hotel_prices)

            const thingsToDo = {
                method: 'GET',
                url: 'https://skyscanner50.p.rapidapi.com/api/v1/getThingsToDo',
                params: {
                    entityId,
                    lat: lat,
                    lng: lon,
                    currency: 'INR'
                },
                headers: {
                    'X-RapidAPI-Key': key,
                    'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
                }
            };
            
            try{ 
                const response3 = await axios.request(thingsToDo)
                const poi = response3.data.data.thingsToDo.filter(el => el.typeLocale==="Attractions")
                console.log(response3)
                console.log(poi);
                
            }catch(err){
                console.log(err);
            }

        }catch(err){
            console.log(err);
        }

    }catch(err){
        console.log(err);
    }
  }
    
  return (
    <form className="travel-form" onSubmit={handleSubmit}>
      <h2>Plan Your Adventure</h2>
      <label>
        Destination:
        <input type="text" value={destination} onChange={(event) => setDestination(event.target.value)} />
      </label>
      <br />
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
      </label>
      <br />
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
      </label>
      <br />
      <label>
        Budget:
        <input type="number" value={budget} onChange={(event) => setBudget(event.target.value)} />
      </label>
      <br />
      <button type="submit">Plan My Trip</button>
    </form>
  );
}

export default TravelForm;
