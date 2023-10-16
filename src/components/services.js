import React from 'react'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: 15,
    paddingLeft: 15,
    marginTop:"20px !important",
  },
  main: {
    backgroundColor:"#191d2b",
    zIndex:1,
    border:"1px solid #2e344e",
    borderTop:"5px solid #2e344e",
    padding:theme.spacing(8),
    transition:"0.4s",
    "&:hover":{
      borderTopColor:theme.palette.primary.main,
      transition:"0.4s"
    },
  },
 
    title:{
      marginTop:"15px !important",
      position:"relative",
      paddingBottom:15,
      "&::before":{
        content: '""',
        position: "absolute",
        top: "auto",
        left: 0,
        right:0,
        bottom: 0,
        height: 2,
        borderRadius: 100,
        width: 50,
        background: "rgba(3, 127, 255, 0.3)",
      },
    },
    desc:{
      marginTop:"15px !important"
    }
}))
export default function Services({icon,title,desc}) {
  const classes = useStyles()
  return (
    <Grid item className={classes.root} lg={4} md={6} xs={12}>
      <Grid container className={classes.main} direction="column" alignItems="flex-start">
          {icon}
        <Typography className={classes.title} variant='h5'>{title}</Typography>
        <Typography className={classes.desc} variant='body1'>
        {desc}
        </Typography>
      </Grid>
    </Grid>
  )
}
