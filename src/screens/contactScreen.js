import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Title from '../components/title';
import { getTranslate } from '../localization';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import './contact.css'
import Contact from '../components/contact'
import Button from '@mui/material/Button'; 
import CallIcon from '@mui/icons-material/CallOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const translate=getTranslate()
const useStyles=makeStyles(theme=>({
  root:{
    minHeight:"100%",
    paddingBottom:30,
    paddingTop:60,
    paddingRight:30,
    paddingLeft:30,
    [theme.breakpoints.down('sm')]:{
      paddingLeft:5,
      paddingRight:5,
    }
  },
  contactGrid:{
    // paddingBottom:30
  },
  FormGrid:{
    padding:10
  },
  detailsGrid:{
    padding:10  
  },
  getintouch:{
  },
  textfield:{
    marginTop:"25px !important"
  },
  button:{
    marginTop:"15px !important",
  },
  iconStyle:{
    fontSize:"35px !important"
  }
}))
export default function ContactScreen() {
  const classes=useStyles()
  return (
    <Grid container  alignItems="flex-start"   className={classes.root}>
      <Grid  item container className={classes.contactGrid} >
         <Title title={translate.Contactme}/>
      </Grid>
      <Grid container style={{marginBottom:20}} direction="row" >
        <Grid item  xs={12} md={6} className={classes.FormGrid}>
          <Typography className={classes.getintouch} variant='h4'>{translate.getintouch}</Typography>
          <TextField  required  fullWidth className={classes.textfield}  label={translate.Name} />   
          <TextField  required fullWidth className={classes.textfield}  label={translate.Email} />        
          <TextField  required fullWidth className={classes.textfield}  label={translate.subject} />        
          <TextField  required  multiline rows={5} fullWidth className={classes.textfield}  label={translate.message} />        
          <Button variant="contained" size='large' className={classes.button}>{translate.sendmessage}</Button>
        </Grid>
        <Grid item  xs={12} md={6} justifyContent="center" alignItems="center"  className={classes.detailsGrid} >
          <Contact icon={<CallIcon className={classes.iconStyle} />} title={translate.phone} text1="09147145292" text2="09030898726" />
          <Contact icon={<EmailIcon className={classes.iconStyle} />} title={translate.email} text1="Salar.so94@gmail.com" text2="s.sotudemaram@mail.sbu.ac.ir" />
          <Contact icon={<LocationOnIcon className={classes.iconStyle} />} title={translate.address} text1={translate.addressdetail} text2="" />
        </Grid>
      </Grid>
    </Grid>
        
)
}
