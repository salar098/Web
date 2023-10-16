import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Title from '../components/title';
import { getTranslate } from '../localization';
import mainImage from "../assets/images/ProfileImage.jpg"
import { Typography } from '@mui/material';
import School from '@mui/icons-material/School';
import Button from '@mui/material/Button';
import Services from '../components/services';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import Smartphone from '@mui/icons-material/Smartphone';
const translate=getTranslate()
const useStyles=makeStyles(theme=>({
  root:{
    minHeight:"100%",
    paddingBottom:30,
    paddingTop:60,
    paddingRight:30,
    paddingLeft:30,
  },
  aboutGrid:{
    // paddingBottom:30
  },
  mainImage:{
    width:"100%",
    height:"100%"
  },
  imageGrid:{
    position:"relative",
    "&::after":{
      content: '""',
      position:'absolute',
      top: "auto",
      bottom: 0,
      right:0,
      height: "65%",
      width: 15,
      background: "rgba(3, 127, 255, 0.6)"},
      "&::before":{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        height: "65%",
        width: 15,
        background: "rgba(3, 127, 255, 0.6)",
      },
  },
  textGrid:{
    position:"relative",
    display:"block",
    flexDirection:"column",
    paddingRight:20,
    paddingLeft:20,
    [theme.breakpoints.down('sm')]:{
      padding:0,
      marginTop:"15px !important",
      marginBottom:"15px !important"
    },
    "& span": {
      color: theme.palette.primary.main,
      [theme.breakpoints.down('sm')]:{
        display:"block"
      }
      
    },    
  },
  iconStyle:{
    color:theme.palette.primary.main,
    fontSize:46
  },
}))
export default function AboutScreen() {
  const classes=useStyles()
  return (
    <Grid container  alignItems="flex-start"   className={classes.root}>
      <Grid  item container className={classes.aboutGrid} >
         <Title title={translate.aboutme}/>
      </Grid>
      <Grid container style={{marginBottom:20}} direction="row" >
        <Grid item  xs={12} md={6} className={classes.imageGrid}>
          <img src={mainImage} className={classes.mainImage} alt={translate.name}/>
        </Grid>
        <Grid item  xs={12} md={6} justifyContent="center" alignItems="center"  className={classes.textGrid} >
        <Typography  variant="h3"> {translate.hi} <span > {translate.name}</span>{translate.hi2}</Typography>
        <Typography  style={{marginTop:10}} variant='body1'>
          {translate.desc}
        </Typography>
        <Typography variant='body1' style={{marginTop:10,}}>
         <b style={{minWidth:100,display:"inline-block"}}>
         {translate.fullname}
         </b>
         {"    :    "}
         {translate.name}
        </Typography>
        <Typography variant='body1' style={{marginTop:5,}}>
         <b style={{minWidth:100,display:"inline-block"}}>
         {translate.age}
         </b>
         {"    :    "}
          29
        </Typography>
        <Typography variant='body1' style={{marginTop:5,}}>
         <b style={{minWidth:100,display:"inline-block"}}>
         {translate.nationality}
         </b>
         {"    :    "}
          {translate.nation}
        </Typography>
        <Typography variant='body1' style={{marginTop:5,}}>
         <b style={{minWidth:100,display:"inline-block"}}>
         {translate.language}
         </b>
         {"    :    "}
          {translate.dil}
        </Typography>
        <Typography variant='body1' style={{marginTop:5,}}>
         <b style={{minWidth:100,display:"inline-block"}}>
         {translate.phone}
         </b>
         {"    :    "}
        (+98)9147145292
        </Typography>
        <Button style={{marginTop:10}} color="primary" variant="outlined" startIcon={<School />}>
        {translate.downloadcv}
        </Button>
        </Grid>
      </Grid>
      <Grid  item container className={classes.aboutGrid} >
         <Title  title={translate.services}/>
      </Grid>
      <Grid container direction="row">
      <Services icon={<DesignServicesIcon className={classes.iconStyle}/>} title={translate.webDesign} desc={translate.descService}/>
      <Services icon={<CodeIcon className={classes.iconStyle}/>} title={translate.webDevelopment} desc={translate.descService}/>
      <Services  icon={<Smartphone className={classes.iconStyle}/>} title={translate.mobileApplication} desc={translate.descService}/>
      </Grid>
      
    </Grid>
  )
}
