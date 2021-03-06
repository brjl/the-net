import React from 'react';
import "./App/App.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';


const GreenSwitch = withStyles({
  switchBase: {
    color: green[900],
    '&$checked': {
      color: green[600],
    },
    '&$checked + $track': {
      backgroundColor: green[600],
    },
  },
  checked: {},
  track: {},
})(Switch);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirect: 'column',
    width: '100%'
  },
  navLeft: { 
    display: 'flex',
    justifyContent: 'space-between'
  },
  navRight: {
    display: 'flex',
    flexDirection: 'space-between'
  },
  toggle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '20px',
    fontFamily: 'calibri',
    fontSize: '20px'
  },
  navBar: {
    display: 'flex',
    backgroundColor: '#AACACC',
    margin: 0,
    padding: '1em',
    height: '5em',
    width: '100%'
  },
  typo: {
    fontFamily: 'Kaushan Script',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  login: {
    fontFamily: "Calibri",
    color: "black",
    margin: "6px"
  }
}));

export default function DenseAppBar(props) {
  const classes = useStyles();
  return (

    <div className={classes.root}>

      <AppBar position="static" className={classes.navBar} >
        <Toolbar className={classes.toolbar} variant="dense">

          <div className={classes.navLeft}>
            <img src="favicon.ico" alt="logo" className={classes.logo} />

            <Typography variant="h4" className={classes.typo}>
              The Net
           </Typography>
          </div>
          <div>
            <Typography>
              <Grid className={classes.toggle} component="label" spacing={1}>
                <Grid item>Search Location</Grid>
                <Grid item>
                  <GreenSwitch
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Switch A' }}
                    onClick={() => props.setSearch(!props.search)}
                    className={classes.searchSwitch}
                    size={'medium'}
                  />
                </Grid>
                <Grid item>Search Pins</Grid>
              </Grid>
            </Typography>
          </div>

          <div className={classes.navRight}>
            <Avatar alt="Avatar Remy Sharp" src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg" />
            <Typography variant="h6" className={classes.login}>
            Remy Sharp
           </Typography>
          </div>

        </Toolbar>
      </AppBar>

    </div>

  );
}
