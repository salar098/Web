import React from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
import Title from '../components/title';
import { getTranslate } from '../localization';
import Portfolios from '../components/portfolios';
import ReactImage from '../assets/images/reactjslogo.png'
const translate = getTranslate()
const useStyles=makeStyles(theme=>({
  root:{
    
      minHeight: "100%",
      padding:30,
      paddingTop:60,
      [theme.breakpoints.down('sm')]:{
        paddingLeft: 10,
        paddingRight:10 ,
    },
  }
}))
export default function PortfoliosScreen() {
  const classes=useStyles()
  return (
    <Grid container className={classes.root}>
      <Title title={translate.portfolios}/>
      <Grid container item direction="row" xs={12}  justifyContent="flex-start">
       {translate.portfoliosList.map((portfolio)=>
        <Portfolios key={portfolio.id} title={portfolio.title} desc={portfolio.desc} image={portfolio.image} href='https://asbambo.ir/' />
       )}
      </Grid>
    </Grid>
  )
}
