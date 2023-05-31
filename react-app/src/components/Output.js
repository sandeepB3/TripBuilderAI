import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PriceBreakupChart from './PriceBreakup';

const useStyles = makeStyles((theme) => ({
  accordion: {
    marginBottom: theme.spacing(2),
    backgroundColor: '#f5f5f5'
  },
  day: {
    fontWeight: 'bold'
  },
  activity: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontSize: '0.95rem'
  }
}));

const parseActivities = (output) => {
  const activitiesByDay = output.split('Day').slice(1);

  return activitiesByDay.map((activity) => {
    const [day, ...rest] = activity.trim().split(':');
    const activities = rest.join(':').trim().split(/(?<=\w)\s(?=\w)/);

    return {
      day,
      activities
    };
  });
};

const Output = (props) => {
  const classes = useStyles();
  const activities = parseActivities(props.apiOutput);

  return (
    <>
    <Typography  
      variant="h4"
      align="center"
      color="primary"
      style={{ fontWeight: 600 }}
    >
    Itinerary
    </Typography>

    {activities.map(({ day, activities }) => (
        <Accordion key={day} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.day}>Day {day}</Typography>
          </AccordionSummary>
          <AccordionDetails>
              {activities.map((activity) => (
                <Typography key={activity} className={classes.activity} paragraph>
                  {activity.replace(/\n/g, <br />)}
                </Typography>
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
      <PriceBreakupChart miscellaneous={props.budget-(props.travelBudget+props.stayBudget)} travelBudget={props.travelBudget} stayBudget={props.stayBudget} totalPrice={props.budget}/>
      <div>
        <div style={{ 
          backgroundColor: '#283049', 
          color: '#fff', 
          padding: '20px',
          // borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Total Budget:</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.budget}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Budget allocated for travel:</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.travelBudget}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Budget allocated for stay:</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.stayBudget}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Food and Attractions:</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{props.budget-(props.travelBudget+props.stayBudget)}</p>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Output;