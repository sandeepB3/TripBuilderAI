import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";
import { BsDot } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  travelHub: {
    margin: theme.spacing(4, 0),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  travelHubTitle: {
    textAlign: "center",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    "& td": {
      verticalAlign: "middle",
      padding: theme.spacing(2),
    },
  },
  contentImg: {
    textAlign: "center",
    "& img": {
      maxWidth: "100%",
      maxHeight: "400px",
    },
  },
}));

const Benefits = () => {
  const classes = useStyles();

  return (
    <div className={classes.travelHub}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.travelHubTitle}>
          <Typography variant="h4" component="h2">
            Trip planner benefits
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <table className={classes.table}>
            <tbody>
              <tr>
                <td className={`${classes.contentImg} ${classes.textTd}`} >
                  <Typography variant="h6" style={{ fontWeight: 600, fontSize: 30 }} >
                    Generate Your Trip With Us
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: 300, fontSize: 23, fontFamily: 'Arial' , alignItems:"left"}}>
                    Optimizes your itinerary
                  </Typography>
                  <ul style={{ fontWeight: 300, fontSize: 15, fontFamily: 'Arial' }}>
<<<<<<< HEAD
                 <li> -  Checks when attractions are open</li>
                    <li> -  Recommends how much time to spend</li>
                    <li> -  Fully customizable</li>
=======
                 <li> <BsDot style={{width: '15px', height: '15px'}}/> Checks when attractions are open</li>
                    <li> <BsDot style={{width: '15px', height: '15px'}}/> Recommends how much time to spend</li>
                    <li> <BsDot style={{width: '15px', height: '15px'}}/> Fully customizable</li>
>>>>>>> 7cb185a (new)
                  </ul>
                  <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        alignItems="left"
                        width='9'
                    
<<<<<<< HEAD
                    >Love It! Let's Start 
=======
                    >Can't Wait! Let's Go 
>>>>>>> 7cb185a (new)
                    </Button>
                </td>
                <td className={classes.contentImg}>
                  <img
                    src="https://trips.klarnacdn.net/images/trip-benefits-2-new.png"
                    alt="Planning engine that helps you see &amp; do more"
                  />
                </td>
              </tr>

              <tr>
                <td className={classes.contentImg}>
                  <img
                    src="https://trips.klarnacdn.net/images/trip-benefits-1-new.png"
                    alt="Research bot that works for you."
                  />
                </td>
                <td className={`${classes.textTd}`} style={{ textAlign:"center" }}>
                  <Typography variant="h6" style={{ fontWeight: 600, fontSize: 30 }}>
                    Research bot that works for you.
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: 300, fontSize: 23, fontFamily: 'Arial' }}>
                    Matches your travel preferences
                  </Typography>
                  <ul style={{ fontWeight: 300, fontSize: 15, fontFamily: 'Arial' }}>
<<<<<<< HEAD
                    <li>-  Over 800 million data points</li>
                    <li>-  Best places &amp; time to visit</li>
                    <li>-  Transportation options</li>
=======
                    <li> <BsDot style={{ width: "15px", height: "15px" }} /> Over 800 million data points</li>
                    <li> <BsDot style={{ width: "15px", height: "15px" }} /> Best places &amp; time to visit</li>
                    <li> <BsDot style={{ width: "15px", height: "15px" }} /> Transportation options</li>
>>>>>>> 7cb185a (new)
                  </ul>
                  <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        alignItems="left"
                        width='9'
                    
<<<<<<< HEAD
                    >Can't Wait! Start Now 
=======
                    >Let's Go!
>>>>>>> 7cb185a (new)
                    </Button>
                </td>
              </tr>
              <tr>
                <td className={`${classes.contentImg} ${classes.textTd}`}>
                  <Typography variant="h6" style={{ fontWeight: 600, fontSize: 30 }}>
                  Your complete trip in one place
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: 300, fontSize: 23, fontFamily: 'Arial' }}>
                  Say hi to your new travel hub!
                  </Typography>
                  <ul style={{ fontWeight: 300, fontSize: 15, fontFamily: 'Arial' }}>
<<<<<<< HEAD
                    <li>-  Checks when attractions are open</li>
                    <li>-  Recommends how much time to spend</li>
                    <li>-  Fully customizable</li>
=======
                    <li> <BsDot style={{ width: "15px", height: "15px" }} /> Checks when attractions are open</li>
                    <li> <BsDot style={{ width: "15px", height: "15px" }} /> Recommends how much time to spend</li>
                    <li> <BsDot style={{ width: "15px", height: "15px" }} /> Fully customizable</li>
>>>>>>> 7cb185a (new)
                  </ul>
                  <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        alignItems="left"
                        width='9'
                    
<<<<<<< HEAD
                    >Let's Go 
=======
                    >Perfect! Start Planning 
>>>>>>> 7cb185a (new)
                    </Button>
                </td>
                <td className={classes.contentImg}>
                  <img
                    src="https://trips.klarnacdn.net/images/trip-benefits-3-new.png"
                    alt="Your complete trip in one place"
                  />
                </td>
                
              </tr>
            </tbody>
          </table>
        </Grid>
        
      </Grid>
    </div>
  );
};


export default Benefits;