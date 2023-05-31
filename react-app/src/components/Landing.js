import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Footer from './Footer';
import Carousel from './Carousel';
import Benefits from './Benefits';
import Features from './Features';


const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  button: {
    borderRadius: '30px',
    padding: '10px 20px',
  },
  label: {
    minWidth: '0',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  likes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  heartIcon: {
    fontSize: '1rem',
    color: theme.palette.secondary.main,
    marginLeft: theme.spacing(2),
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
}));


const cards = [
  {
    title: 'A local’s touristy guide to Singapore',
    image: 'https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/1kk2K6uh4y5jEKGD71mcs7lXgd7FEzkc',
    description:
      'Lived in Singapore my whole life! This guide is for those looking to tick off the list of tourist attractions in the sunny Republic.',
    likes: 74,
  },
  {
    title: 'A week in New York City, USA',
    image: 'https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/UtAaspTcFqA9qL7KBMssSSdJ0dBSYvOO',
    description:
      'New York was the first city we visited in the USA and certainly lived up to our expectations in all respects. an established safe haven for global investors, and is sometimes described as the capital of the world.',
    likes: 123,
  },
  {
    title: 'Uttarakhand Guide',
    image: 'https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/AF840gz1nyzN8X7ohmQeiQ3xqiIDi2DN',
    description:
      'Uttrakhand is very well known to all those who travel to India and love the mountains. It is one of the few places which gives you peace while still maintaining the chic city life around you.',
    likes: 321,
  },
  {
    title: 'Jaipur Guide',
    image: 'https://itin-dev.sfo2.cdn.digitaloceanspaces.com/freeImageSmall/UPJJjLUmFawrsLwahgeluMJy9G7xTaE1',
    description:
      'I was born in Jaisalmer, which is 650 km drive from Jaipur, but the state in which I live in "Rajasthan" is huge, and 650 km is nothing as per locals like me.',
    likes: 567,
  },
];

export default function Landing() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
    <Carousel/>
      <Features/>
      <main>
   
        <React.Fragment>
       
      <Container className={classes.cardGrid} maxWidth="lg">
          <Typography variant="h3" style={{ fontWeight: 'bold', marginRight: '19px' }}>
            Explore
          </Typography>
        <br/>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.title} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                <a href="https://wanderlog.com/view/hxwbckbikf/-a-week-in-new-york-city-usa" target="_blank" rel="noopener noreferrer">
                  <Button size="small" color="primary">
                    View
                  </Button>
                </a>
                  
                  <div className={classes.likes}>
                    <FavoriteIcon className={classes.heartIcon} />
                    <Typography>{card.likes}</Typography>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
    {/* See more button */}
    <div className={classes.container}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        <div className="flex-grow-1 flex-shrink-1 minw-0">
          <div className={`Button__label flex-shrink-1 minw-0 ${classes.label}`}>
            <span className="Button__labelText flex-shrink-1 minw-0">See more</span>
          </div>
        </div>
      </Button>
    </div>

      </main>
<br/>
<Benefits/>

<Footer/>

    </React.Fragment>
  );
}
