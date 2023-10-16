import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import StepConnector from '@mui/material/StepConnector';
import Hidden from '@mui/material/Hidden';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles(theme => ({
  root:{
 [theme.breakpoints.down("sm")]:{
  // minWidth:400
 }
  },
  StepConnector:{
    "& span":{
      borderLeft:"3px solid #2e344e",
       minHeight:7,
       [theme.breakpoints.down('sm')]:{
        minHeight:24
       }
    }
  },
  StepContent:{
    borderLeft: "3px solid #2e344e !important",
    marginTop: -9,
  },
  divStepContent:{
    display:"flex",
    flexDirection:"row"
  },
  divkhali:{
    width:205
  },
  circle:{
    borderRadius:8,
    width:16,
    height:16,
    border:"4px solid #2e344e",
    marginLeft:6
  },
  Steplabel:{
    paddingBottom:"0px !important",
    paddingTop:"0px !important",
    marginTop:-10,
  },
  label:{
    display:"flex !important",
    flexDirection:"row",
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column",
      justifyContent:"center",
    alignItems:"flex-start",
    },
    justifyContent:"flex-start",
    alignItems:"center",
  },
  title:{
    color:"#037fff !important"
  },
  divsubtitle:{
    display:"flex",
    flexDirection:"column",
    marginTop:15 
  },
  line:{
    marginRight:"15px !important",
    width:30,
    height:1,
    backgroundColor:"#2e344e"
  },
  date:{
    width:120,
    textAlign:"left"
  },
  content:{
    flex:1
  }
 

}))
export default function MyStepper({steps}) {
  const classes=useStyles()
  return (
    <Box className={classes.root}>
      <Stepper connector={<StepConnector className={classes.StepConnector}/>} orientation="vertical">
        {steps.map((step) => step.id >=0? (
          <Step key={step.id} active={true}>
            <StepLabel
              classes={{label:classes.label}}
             className={classes.Steplabel} icon={<span className={classes.circle}/>}>
              <Typography className={classes.date} variant='h6'>
              {step.date}
              </Typography>
              <Hidden smDown>
              <span className={classes.line}/>
              </Hidden >
              <Typography className={classes.title}  variant='h5'>
              {step.title}
              </Typography>
            </StepLabel>
            <StepContent className={classes.StepContent}>
              <div className={classes.divStepContent} >
                <Hidden smDown>
                <div className={classes.divkhali}></div>
                </Hidden>
                <div className={classes.divsubtitle} >
                <Typography variant='h6'>{step.subtitle}</Typography>
              <Typography className={classes.content}  variant="body1">{step.content}</Typography>
                </div>
              
              </div>
              
              <Box sx={{ mb: 2 }}>
                <div>
                </div>
              </Box>
            </StepContent>
          </Step>
        ):(<Step key={step.id} active={true}>
        </Step>))}
      </Stepper>
    </Box>
  );
}
