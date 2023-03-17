import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCalendar, faEdit, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  planStepsPane: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
  },
  title: {
    marginBottom: '2rem',
  },
  steps: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
    width: '22%',
  },
  stepImg: {
    width: '5rem',
    height: '5rem',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    boxShadow: '0px 0px 5px rgba(0,0,0,0.1)',
  },
  stepTitle: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  stepDesc: {
    color: '#777',
    textAlign: 'center',
  },
  arrow: {
    position: 'absolute',
    top: '3.5rem',
    zIndex: '0',
    height: '0.5rem',
  },
  arrow1: {
    left: '20%',
    width: '10%',
  },
  arrow2: {
    left: '50%',
    width: '15%',
  },
  arrow3: {
    left: '80%',
    width: '17%',
  },
  toggle: {
    marginTop: '2rem',
  },
  knowMore: {
    display: 'inline-block',
    fontWeight: 'bold',
    color: '#0077c2',
    cursor: 'pointer',
  },
  arrowIcon: {
    marginLeft: '0.5rem',
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.planStepsPane}>
        <h2 className={classes.title}>Easy to use, easy to browse</h2>
        <div className={classes.steps}>
          <div className={classes.step}>
            <div className={classes.stepImg}>
              <FontAwesomeIcon icon={faGlobe} size="2x" />
            </div>
            <div className={classes.stepDesc}>
              <div className={classes.stepTitle}>Get a personalized trip</div>
              A full day by day itinerary based on your preferences
            </div>
          </div>
          <div className={classes.step}>
            <div className={classes.stepImg}>
              <FontAwesomeIcon icon={faCalendar} size="2x" />
            </div>
            <div className={classes.stepDesc}>
              <div className={classes.stepTitle}>Customize it</div>
              Refine your trip. We'll find the best routes and schedules
            </div>
          </div>
          <div className={classes.step}>
   <div className={classes.stepImg}>
     <FontAwesomeIcon icon={faEdit} size="2x" />
   </div>
   <div className={classes.stepDesc}>
     <div className={classes.stepTitle}>Edit your plan</div>
     Easily make changes or add new activities to your itinerary
   </div>
</div>
<div className={classes.step}>
   <div className={classes.stepImg}>
     <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
   </div>
   <div className={classes.stepDesc}>
     <div className={classes.stepTitle}>Navigate your trip</div>
     Access your itinerary on the go and get real-time updates
   </div>
</div>
</div>
</div>
</div>
);
};
export default Features;