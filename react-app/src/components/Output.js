import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const Output = ({ apiOutput }) => {
  const classes = useStyles();
  const activities = parseActivities(apiOutput);

  return (
    <>
      {activities.map(({ day, activities }) => (
        <Accordion key={day} className={classes.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.day}>{day}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {activities.map((activity) => (
                <li key={activity} className={classes.activity}>
                  {activity}
                </li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default Output;