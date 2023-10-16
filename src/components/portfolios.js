import React,{useState} from 'react'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid';
// import ReactImage from '../assets/images/reactjslogo.png'
// import ReactDev from '../assets/images/reactjslogo1.jfif'
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';
const useStyles=makeStyles(theme=>({
    root:{
    padding:15,
    marginBottom:"15px !important"
},
image:{
cursor:"pointer",
// transition:"1s",
// width:"100%",
"&:hover":{
    transform:"rotate(360deg)",
    transition:"1s"
}
},
imagetext:{
        display:"flex",
        justifyContent:"center",
        "& a":{
        textDecoration:"none",
        // marginBottom:10,
        color:"#fff",
        cursor:"pointer",
        "&:hover":{
            color:theme.palette.primary.main
        } 
        }},
        text:{
            display:"flex",
            justifyContent:"center",
            // marginBottom:"10px !important"
        },
imageModal:{
    width:"100%",
    height:"100%",
    backgroundColor:"#000"
    },
Modal:{
    width:"60%",
    height:"60%",
    display:"flex",
    alignSelf:"center",
    justifyContent:"center",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:60,
}
    }))
export default function Portfolios({image,href,title,desc}) {
    const classes=useStyles()
    const[open,setOpen]=useState(false)
  return (
    <>
    <Grid item lg={4} className={classes.root}>
        <img onClick={()=>{
            setOpen(true)
        }} className={classes.image} width="100%" src={image} alt={title}/>
        <Typography variant='h5' className={classes.imagetext}>
        <a href={href}>{title}</a>
        </Typography>
        <Typography variant='body1' className={classes.text}> 
           {desc}
        </Typography>
        </Grid>
        <Modal className={classes.Modal} open={open} onClose={()=>setOpen(false)} >
        <img  className={classes.imageModal}  src={image} alt={title}/>
        </Modal>
    </>
  )
}
