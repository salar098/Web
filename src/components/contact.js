import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { getTranslate } from '../localization';
const translate=getTranslate()
const useStyles = makeStyles(theme => ({
  root: {
    width:"100%",
     marginTop:20
  },
  main: {
    backgroundColor:"#191d2b",
    zIndex:1,
    border:"1px solid #2e344e",
    borderTop:"5px solid #2e344e",
    padding:theme.spacing(8),
    transition:"0.4s",
    [theme.breakpoints.down("sm")]:{
      padding:theme.spacing(4)
    },
    "&:hover":{
      borderTopColor:theme.palette.primary.main,
      transition:"0.4s"
    },
  },
  divIcon:{
    border:"1px solid #2e344e",
    padding:10,
    display:"flex",
    justifyContent:"center"
  },
divDetail:{
  alignItems:"flex-start",
  display:"flex",
  flexDirection:"column",
  paddingLeft:20,
},
number:{
  cursor:"pointer",
  transition:"0.4s",
  "&:hover":{
    color:theme.palette.primary.main,
    transition:"0.4s"
  }
}
}))
export default function Contact({icon,title,text1,text2}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container className={classes.main} direction="row" alignItems="center" justifyContent="flex-start">
        <div className={classes.divIcon}>
        {icon}
        </div>
        <div className={classes.divDetail}>
          <Typography variant="h6">{title}</Typography>
          <Typography className={classes.number} variant="body1">{text1}</Typography>
          <Typography className={classes.number} variant="body1">{text2}</Typography>
        </div>
      </Grid>
    </div>
  )
}

