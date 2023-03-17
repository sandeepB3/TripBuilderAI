// import React from "react";
// import {
//   makeStyles,
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Button,
//   Link,
// } from "@material-ui/core";
// import Typewriter from "typewriter-effect";
// import Slider from 'react-slick';
// // import { makeStyles } from '@material-ui/core/styles';
// import { Card, CardMedia } from '@material-ui/core';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: "102vh",
//     width: '218vh',
//     position: "relative",
//   },
//   background: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     zIndex: -1,
//     opacity: 10,
//     maxWidth: "100%",  // add this line
//   },
//   heroContent: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "100%",
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
// },
// cardMedia: {
// paddingTop: "50%", // 16:9
// },
// cardContent: {
// flexGrow: 1,
// },
// footer: {
// backgroundColor: theme.palette.background.paper,
// padding: theme.spacing(6),
// },
// slickSlide: {
//     opacity: 0.8
//   },
// }));

// export default function Carousel(){
// const classes = useStyles();

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,  // enable autoplay
//     autoplaySpeed: 2000,  // set autoplay speed to 2 seconds
//   };
// const images = [
//   'https://altours-html.astemplatedesigns.com/assets/images/Home/Home-1.png',
//   'https://altours-html.astemplatedesigns.com/assets/images/Home/Home-2.png',
//   'https://altours-html.astemplatedesigns.com/assets/images/Home/Home-3.png'
// ];
// const styles = {
//     slideImage: {
//       width: 1600,
//       height: 630
//     }
//   }
// return (
//     <div className={classes.root}>
//     {/* <Slider {...settings} >
//             <div className={classes.slickSlide}>
//             <img src={images[0]} alt={`Slide1`} style={styles.slideImage} />
//         </div>
//         <div>
//             <img src={images[1]} alt={`Slide2`} style={styles.slideImage} />
//         </div>
//         <div>
//             <img src={images[2]} alt={`Slide3`} style={styles.slideImage} />
//         </div>
//         </Slider> */}
//     <img
//         src="https://altours-html.astemplatedesigns.com/assets/images/Home/Home-1.png"
//         alt="background"
//         className={classes.background}
//     />

//     <div>
//     <div className={classes.heroContent}>
//     <Typography
//     component="h1"
//     variant="h2"
//     align="center"
//     color="textPrimary"
//     style={{ fontWeight: 600 }}
//     gutterBottom
//     >
//     TripBuilderAI
//     </Typography>
//     <Typography
//     variant="h4"
//     align="center"
//     color="primary"
//     style={{ fontWeight: 600 }}
//     paragraph
//     >
//     Looking for a hassle-free way to plan your next trips?
//     </Typography>
//     <Typography variant="h5" align="left" color="textSecondary" paragraph>
//       <Typewriter
//         options={{
//           strings: [
//             "\nLook no further than TripBuilderAI, the travel itinerary generator that does the hard work for you. Create a customized itinerary that matches your preferences and budget, so you can focus on enjoying your journey.",
//           ],
//           autoStart: true,
//           delay: 25,
//           pauseFor: 999999999,
//         }}
//       />
//     </Typography>
//   </div>
//   </div>
// </div>
// );
// }

import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Box,
  Grid,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";
// import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "102vh",
    width: "218vh",
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 20,
    maxWidth: "100%", // add this line
  },
  heroContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "50%", // 16:9
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  slickSlide: {
    opacity: 0.3,
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    padding: theme.spacing(3),
    boxSizing: "border-box",
  },
}));

export default function Carousel() {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable autoplay
    autoplaySpeed: 2000, // set autoplay speed to 2 seconds
  };
  const images = [
    "https://altours-html.astemplatedesigns.com/assets/images/Home/Home-1.png",
    "https://altours-html.astemplatedesigns.com/assets/images/Home/Home-2.png",
    "https://altours-html.astemplatedesigns.com/assets/images/Home/Home-3.png",
  ];
  const styles = {
    slideImage: {
      width: 1600,
      height: 630,
    },
  };
  return (
    <div className={classes.root}>
      <img
        src="https://altours-html.astemplatedesigns.com/assets/images/Home/Home-1.png"
        alt="background"
        className={classes.background}
      />
      <div className={classes.container}>
        <Typography
          component="h1"
          variant="h2"
          align="left"
          color="inherit"
          style={{ fontWeight: 600, position: "absolute", top: 50, left: 50 }}
        >
          TripBuilderAI
        </Typography>
        <div className={classes.heroContent}>
          <Typography
            variant="h4"
            align="left"
            color="primary"
            style={{ fontWeight: 600, position: "relative", top: 0, left: 50 }}
            paragraph
          >
            Looking for a hassle-free way to plan your next trips?
          </Typography>
          <Typography
            variant="h5"
            align="left"
            color="inherit"
            style={{
              fontWeight: 200,
              position: "relative",
              right: 50,
              left: 50,
            }}
            paragraph
          >
            <Typewriter
              options={{
                strings: [
                  "\nLook no further than TripBuilderAI, a customized travel itinerary generator so that you can focus on enjoying your journey.",
                ],
                autoStart: true,
                delay: 25,
                pauseFor: 999999999,
              }}
            />
          </Typography>
          <div
            className={classes.heroButtons}
            style={{
              fontWeight: 200,
              position: "relative",
              right: 50,
              left: 50,
            }}
          >
            <Grid container spacing={2} justifyContent="left">
              <Grid item>
                <Link to="/itinerary">
                  <Button variant="contained" color="primary">
                    Generate Itinerary
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
