import React from 'react'
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Title from '../components/title';
import { getTranslate } from '../localization';
import Skill from '../components/skill'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Typography } from '@mui/material';
import MyStepper from '../components/MyStepper';
import SchoolIcon from '@mui/icons-material/School';
const translate = getTranslate()
const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100%",
    paddingBottom: 30,
    paddingTop: 60,
    paddingRight: 30,
    paddingLeft: 30,
    [theme.breakpoints.down('sm')]:{
      paddingLeft: 0,
      paddingRight:0 ,
    }
  },
  resumeGrid: {
    marginTop:"30px !important",
    },
    skillissue:{
      marginLeft:"10px !important",
    }
}))
export default function ResumeScreen() {
  const classes = useStyles()
  return (
    <Grid container alignItems="flex-start" className={classes.root}>
      <Grid item container className={classes.mySkillsGrid} >
        <Title title={translate.MySkills} />
      </Grid>
      <Grid container style={{ marginBottom: 20 }} direction="row">
        <Grid item xs={12} md={6}>
          <Skill  value={80} title="html5" />
          <Skill  value={75} title="JavaScript"/>
          <Skill  value={60} title="React Js"/>
        </Grid>
        <Grid item xs={12} md={6} justifyContent="center" alignItems="center">
          <Skill value={90} title="React Native"/>
          <Skill  value={80} title="Node.js"/>
          <Skill  value={85} title="PHP"/>
        </Grid>
        <Grid item container className={classes.resumeGrid}  >
          <Title title={translate.resume} />
        </Grid>
        <Grid alignItems="center" justifyContent="flex-start" container direction="row">
          <BusinessCenterIcon style={{fontSize:34}}/>
          <Typography className={classes.skillissue}  variant="h4">
            {translate.WorkingExperience}
          </Typography>
        </Grid>
        <Grid container mt="15px" mb="15px">
          <MyStepper steps={translate.workingSteps}/>
        </Grid>
        <Grid alignItems="center" justifyContent="flex-start" container direction="row">
          <SchoolIcon style={{fontSize:34}}/>
          <Typography className={classes.skillissue}  variant="h4">
            {translate.EducationalQualifications}
          </Typography>
        </Grid>
        <Grid container mt="15px" mb="15px">
          <MyStepper steps={translate.educationalSteps}/>
        </Grid>
      </Grid>
    </Grid>
  )
}
