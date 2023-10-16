import { Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { lang } from '../localization';
const useStyles=makeStyles(theme=>({
root:{
  position:"relative",
  marginBottom:60,
  height:75,
  width:"100%",
  "& span":{
    fontSize:"3.2rem",
    position:"relative",
    zIndex:-1,
    left:15,
    top:"30%",
    lineHeight:"1rem",
    fontWeight:900,
    color:"rgba(25,29,43,0.44)",
    display:"inline-block",
    transform:"translateY(-40%)"
  }
},
title:{
  textAlign:"left",
"&::after":{
  content: '""',
  position:'absolute',
  top: "auto",
  left: 0,
  right:0,
  bottom: 0,
  height: 5,
  borderRadius: 100,
  width: 35,
  background: "#037fff"},
  "&::before":{
    content: '""',
    position: "absolute",
    top: "auto",
    left: 0,
    right:0,
    bottom: 0,
    height: 5,
    borderRadius: 100,
    width: 100,
    background: "rgba(3, 127, 255, 0.3)",
  },
  
}
}))
export default function Title({title}) {
  const classes=useStyles()
  return (
    <div className={classes.root} >
        <Typography  className={classes.title} variant='h2'>
        {title}
        </Typography>
        <span >
          {title}
        </span>
    </div>
  )
}
