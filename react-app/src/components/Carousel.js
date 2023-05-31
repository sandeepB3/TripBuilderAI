import React from "react";
import { makeStyles, Typography, Grid, Button,} from "@material-ui/core";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
  roundedButton: {
    borderRadius: '10px', // Adjust the value as per your preference
  },

}));

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'contain',
};

export default function Carousel() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ maxWidth: '100%' }}>
      <img
        src="https://www.travelandleisure.com/thmb/wsA6EXFuYkqtuJGLbQWw05-cwPs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lake-como-MOSTBEAUTIFUL0921-cb08f3beff1041e4beefc67b5e956b23.jpg"
        alt="background"
        style={imageStyle}
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
            onInit={(typewriter) => {
            typewriter.typeString('Discover Amazing Things')
            .pauseFor(300)
            .deleteAll()
            .typeString('Travel With TripBuilder AI')
            .pauseFor(300)
            .deleteAll()
            .typeString('Smooth Trip Planning')
            .pauseFor(300)
            .start();
            }}
            options={{
            loop: true,
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
                  <Button variant="contained" color="primary" className={classes.roundedButton}>
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
