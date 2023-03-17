import React, { useState,useContext,useEffect } from 'react';
import '../styles/TravelForm.css';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/Itinerary.css';
import { useNavigate } from 'react-router-dom';
import Output from './Output';

let optimalHotel = {};
let attractions = {};
let gptResponse = {};

const key = '6820aab538msh2d1adb7f042b0a4p183161jsn4c392e858a6c'

function Generate() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    // Update the document title using the browser API
    if(!auth.state.isLoggedIn){
      navigate("/auth/signin")
    }
  },[]);

  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [showOutput, setShowOutput] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const travelBudget = 0.15*budget;
  const stayBudget = 0.4*budget;
 

  const gptPrompt = async () => {
    try {
      gptResponse = await axios.post("http://localhost:4000/gptPrompt", {
        destination,
        startDate,
        endDate,
        attractions: Object.keys(attractions),
        hotel: optimalHotel.name,
        budget: budget - optimalHotel.rawPrice - travelBudget,
      });
      const { output } = gptResponse.data;
      console.log("OpenAI replied...", output.text);
      setShowOutput(true);
      setApiOutput(`${output.text}`);
      setIsGenerating(false);
      setDestination("");
      setStartDate("");
      setEndDate("");
      setBudget("");
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    console.log("Destination:", destination);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Budget:", budget);

    const places = {
      method: "GET",
      url: "https://skyscanner50.p.rapidapi.com/api/v1/searchPlace",
      params: { query: destination },
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
      },
    };

    // axios.request(places).then(function (response) {
    //     const entityId = response.data[0].entityId;
    // }).catch(function (error) {
    //     console.error(error);
    // });

    try {
      const response = await axios.request(places);
      console.log(response);
      const entityId = response.data.data[0].entityId;
      const location = response.data.data[0].location;
      const lat_lon = location.split(",");
      const lat = lat_lon[0];
      const lon = lat_lon[1];

      console.log(entityId);
      console.log(location);

      const hotels = {
        method: "GET",
        url: "https://skyscanner50.p.rapidapi.com/api/v1/searchHotel",
        params: {
          entityId: entityId,
          checkin: startDate,
          checkout: endDate,
          currency: "INR",
        },
        headers: {
          "X-RapidAPI-Key": key,
          "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
        },
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

      try {
        const response2 = await axios.request(hotels);
        const filteredRes = response2.data.data.hotels.filter(
          (el) => el.priceDescription !== ""
        );
        console.log(filteredRes);
        const sorted_hotel_prices = filteredRes.sort(function (a, b) {
          // const priceA = parseInt(a.price?.replace(/[^\d]/g, ''));
          // const priceB = parseInt(b.price?.replace(/[^\d]/g, ''));
          return a.rawPrice - b.rawPrice;
        });

        console.log(filteredRes);

        let i = 0;
        while (sorted_hotel_prices[i].rawPrice <= stayBudget) {
          i++;
        }
        optimalHotel = sorted_hotel_prices[i - 1];
        console.log(sorted_hotel_prices);
        console.log(optimalHotel);
        // res.hotel=optimalHotel

        const thingsToDo = {
          method: "GET",
          url: "https://skyscanner50.p.rapidapi.com/api/v1/getThingsToDo",
          params: {
            entityId,
            lat: lat,
            lng: lon,
            currency: "INR",
          },
          headers: {
            "X-RapidAPI-Key": key,
            "X-RapidAPI-Host": "skyscanner50.p.rapidapi.com",
          },
        };

        try {
          const response3 = await axios.request(thingsToDo);
          const poi = response3.data.data.thingsToDo.filter(
            (el) => el.poiTypeLocale === "Attractions"
          );
          console.log(response3);
          console.log(poi);

          for (let i = 0; i < poi.length; i++) {
            attractions[poi[i].poiName] = poi[i].coordinate;
          }
          console.log(attractions);
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
      gptPrompt();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {showOutput ? (
        <>
          <h3>Output</h3>
          <Output/>
          <p>{apiOutput}</p>
        </>
      ) : (
        <form className="travel-form" onSubmit={handleSubmit}>
          {/* <h2>{auth.state.isLoggedIn ? "LoggedIn" : "Who are you"}</h2> */}
          <h2 style={{ textAlign: "center" }}>Plan Your Adventure</h2>
          <label>
            Destination:
            <input
              type="text"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />
          </label>
          <br />
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </label>
          <br />
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </label>
          <br />
          <label>
            Budget:
            <input
              type="number"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            />
          </label>
          <br />
          <div className="prompt-buttons">
            <button type="submit">
              <div className="generate">
                {isGenerating ? (
                  <span className="loader"></span>
                ) : (
                  <p>Plan My Trip</p>
                )}
              </div>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Generate;
