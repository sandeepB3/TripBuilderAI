import React,{useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { TbAffiliateFilled } from "react-icons/tb";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  h3: {
    alignContent: 'center',
  }
}));

export default function Header({ isSignedIn, onSignOut }) {
  const classes = useStyles();
  const auth=useContext(AuthContext)
  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };
  const onLogout=async()=>{
    auth.setState(false);
    const response = await axios.get('http://localhost:4000/login')
  }
  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
        <div>
        <TbAffiliateFilled style={{width: '50px', height: '50px'}}/>
        {/* <img src={travel} position='static' alignItems='left' width={20px}/> */}
        </div>
          {/* <Typography
            variant="h6"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          > */}
            {/* <FontAwesomeIcon icon={solid('user-secret')} /> */}

            
          {/* </Typography> */}
          {auth.state.isLoggedIn? 
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={isSignedIn ? '/' : '/auth/signin'}
            onClick={onLogout}
          > 
            Logout
          </Button> : 
          
          <Button
            color="primary"
            variant="outlined"
            className={classes.link}
            component={RouterLink}
            to={isSignedIn ? '/' : '/auth/signin'}
            onClick={onClick}
          >
           Login
          </Button> }
         
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
