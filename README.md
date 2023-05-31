# TripBuilderAI

Looking for a hassle-free way to plan your next trips?   
Look no further than TripBuilderAI, the travel itinerary generator that does the hard work for you. Create a customized itinerary that matches your preferences and budget, so you can focus on enjoying your journey.

## Features
- A full day by day itinerary based on your preferences
- Refine your trip. We'll find the best routes and schedules
- Easily make changes or add new activities to your itinerary
- Access your itinerary on the go and get real-time updates

## API Reference

#### Skyscanner API
For Required Header Parameters - Refer [API Documentation](https://rapidapi.com/DataCrawler/api/skyscanner50)
```http
https://skyscanner50.p.rapidapi.com/api/v1/searchPlace
https://skyscanner50.p.rapidapi.com/api/v1/searchHotel
https://skyscanner50.p.rapidapi.com/api/v1/getThingsToDo
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `X-RapidAPI-Key` | `enum` | Your API key (**Required**) |
| `X-RapidAPI-Host` | `string` | RapidAPI Host (**Required**)|

Refer the above documentation for code snippets and example response

#### OpenAI API
For Required Parameters - Refer [API Documentation](https://platform.openai.com/overview)

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `enum` | Your API key (**Required**) |

Refer the above documentation for code snippets and example response

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPENAI_API_KEY`

`MONGO_URL`

`skyscanner_URL`

***You will need to make an account with RapidAPI and fill in some credit card details to obtain the API Key. (You will not be charged anything for the same).***

You may also use any other API as per your convenience.

## Run Locally

Clone the project

```bash
  git clone https://github.com/sandeepB3/TripBuilderAI.git
```

Go to the react-app and backend project directories, respectively

```bash
  cd react-App
  cd backend
```

Install dependencies

```bash
  npm install
```

Create .env file in backend folder & fill the env variables as shown above

```bash
  touch .env
```

Start both client and the server - Both run independently on different ports

```bash
  npm start - client
```
```bash
  nodemon index.js - server
```
## Tech Stack

**Client:** React, MaterialUI, Context

**Server:** Node, Express, OpenAI, API's, MongoDB

## Screenshots
<img width="1440" alt="Screenshot 2023-05-31 at 10 18 36 AM" src="https://github.com/sandeepB3/TripBuilderAI/assets/107111616/0af3c3d9-2bfd-4b52-8d54-c9763bdb225e">
<img width="1440" alt="Screenshot 2023-05-31 at 10 18 49 AM" src="https://github.com/sandeepB3/TripBuilderAI/assets/107111616/3d8096e8-f0c2-471e-bebd-0765e050dfb9">
<img width="1440" alt="Screenshot 2023-05-31 at 10 26 56 AM" src="https://github.com/sandeepB3/TripBuilderAI/assets/107111616/e0ff8e41-c153-4bbf-bdad-ed14e25aa0c1">
<img width="1440" alt="Screenshot 2023-05-31 at 2 33 09 PM" src="https://github.com/sandeepB3/TripBuilderAI/assets/107111616/79ad0d07-fc4f-409f-8bbb-b2d48d20868c">
**The Itinerary Page has not been styled yet - Contributions are welcomed**

## Future Scope

- Support for accessibility feature - Map Box
- Dark / Light mode - Toggle UI
- Conversation Mode - Converse with AI to update the Itinerary
