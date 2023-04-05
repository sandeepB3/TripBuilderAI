import React, { useState,useContext,useEffect } from 'react';
import '../styles/TravelForm.css';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/Itinerary.css';
import { useNavigate } from 'react-router-dom';
import Output from './Output';
<<<<<<< HEAD
=======
import PriceBreakupChart from './PriceBreakup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PointsList from './PointList';
import { red } from '@material-ui/core/colors';
>>>>>>> 7cb185a (new)

//Storing output objects of api calls
let optimalHotel = {};
let attractions = {};
let gptResponse = {};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
    },
  },
  asterisk: {
    color: red[500],
    fontSize: '1.1.rem',
    verticalAlign: 'super',
    marginLeft: '0.2rem',
  },
}));

//API Key
const key = '45d4cf1702mshdf80baf491e74fdp1c2157jsnc79ef27ef117'

function Generate() {
  const classes = useStyles();

  //Sharing of authentication globally
  const auth = useContext(AuthContext) 

  //For redirection of Navigation
  const navigate = useNavigate()

  //Runs before rendering []
  useEffect(() => {
    //Update the document title using the browser API
    if(!auth.state.isLoggedIn){
      navigate("/auth/signin")
    }
  },[]);

  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState(0);
  const [apiOutput, setApiOutput] = useState('')
  const [showOutput, setShowOutput] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [points, setPoints] = useState([]);

  let travelBudget = 0
  const stayBudget = (0.4*budget)

  // premium:15
  // deluxe:12.5
  // standard:10
  if(budget>=80000)
  {
    travelBudget=0.2*budget;
  }
  else if(50000<=budget && budget<=70000){
    travelBudget=0.175*budget; 
  }
  else
  {
    travelBudget=0.15*budget;
  }

  let miscellaneous = budget - (travelBudget + stayBudget)

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
      setPoints(apiOutput.split("Day").slice(1).map(point => "Day" + point.trim()));
    
      setIsGenerating(false);
      setDestination("");
      setStartDate("");
      setEndDate("");
      setBudget("");
    } catch (e) {
      console.log(e);
    }
  };

  //Skyscanner API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    console.log("Destination:", destination);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Budget:", budget);

    console.log(travelBudget);
    console.log(stayBudget);

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
        <div className='api-output'>
          <Typography  
            variant="h4"
            align="center"
            color="primary"
            style={{ fontWeight: 400 }}
          >
            Itinerary
          </Typography>
          <br />
          {/* <div className='api-output'>
            <Typography  
              variant="h6"
              align="justify"
              color="inherit"
              style={{ fontWeight: 600 }}
            >
              {apiOutput}
            </Typography> */}
            <div>
            <PointsList points={points}/>
          </div>  
        </div>
    
        </>
      ) : (
<<<<<<< HEAD
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
=======
        
        <div className={classes.container}>
          <div className='right'>
          <br></br>
          <form className="travel-form" onSubmit={handleSubmit}>
            <h2 style={{ textAlign: "center" }}>Plan Your Adventure</h2>
            <label>
              Destination<Typography className={classes.asterisk} component="span">* </Typography>:
              <input
                type="text"
                value={destination}
                onChange={(event) => setDestination(event.target.value)}
              />

            </label>
            <br />
            <label>
              Start Date<Typography className={classes.asterisk} component="span">* </Typography>:
              <input
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              />
            </label>
            <br />
            <label>
              End Date<Typography className={classes.asterisk} component="span">* </Typography>:
              <input
                type="date"
                value={endDate}
                min={startDate}
                onChange={(event) => setEndDate(event.target.value)}
              />
            </label>
            <br />
            <label>
              Budget<Typography className={classes.asterisk} component="span">* </Typography>:
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
        </div>
          
          <PriceBreakupChart miscellaneous={miscellaneous} travelBudget={travelBudget} stayBudget={stayBudget} totalBudget={budget}/>
          <div>
          <br></br>
        <div style={{ 
          backgroundColor: '#283049', 
          color: '#fff', 
          padding: '20px',
          // borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          maxHeight: '600px'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Total Budget:</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{budget}</p>
>>>>>>> 7cb185a (new)
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Budget allocated for travel:</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{travelBudget}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Budget allocated for stay:</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stayBudget}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Food and Attractions:</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{miscellaneous}</p>
          </div>
        </div> 
      </div>
        </div>
      )}
    </div>
  );
}

export default Generate;
