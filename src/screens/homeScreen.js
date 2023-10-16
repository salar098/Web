import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
// import './home.css'
import IconButton from '@mui/material/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from '@mui/material/Typography';
import { getTranslate } from '../localization';
const translate=getTranslate()
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    "& span": {
      color: theme.palette.primary.main,
      [theme.breakpoints.down('sm')]:{
        display:"block"
      }
    },
  },
  divIcon:{
    marginTop:15
  },
  IconButton: {
    border: "2px solid #2e344e",
    height:45,
    width:45,
    color: theme.palette.secondary.main,
    marginRight: 8,
    marginLeft: 8,
    transition:"1s",
    "&:hover":{
      color:theme.palette.primary.main,
      borderColor:theme.palette.primary.main,
      transition:"1s"
    }
  },
  
}))
export default function HomeScreen() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div> */}
      <Grid item justifyContent="center" alignItems="center">
        <Typography variant="h1"> {translate.hi} <span > {translate.name}</span>{translate.hi2}</Typography>
        <Typography variant='subtitle1'>
          {translate.desc}
        </Typography>
        <div className={classes.divIcon}>
        <IconButton className={classes.IconButton} >
          <TelegramIcon />
        </IconButton>
        <IconButton className={classes.IconButton} >
          <InstagramIcon />
        </IconButton>
        <IconButton className={classes.IconButton} >
          <WhatsAppIcon />
        </IconButton>
        </div>
      </Grid>
    </div>
  )
}
