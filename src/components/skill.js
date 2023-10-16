import React,{useState,useEffect} from 'react'
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
const useStyles = makeStyles(theme => ({
    root: {
        padding: 10,
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
    },
    rootTyp: {
        width: "100%"

    },
    progressDiv: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        width:"100%"
    },
    linearProgress: {
        marginLeft: 15,
        marginRight: 15,
        width: "90%",
        height:"6px !important",
        backgroundColor:"#2e344e !important"
    }
}))
export default function Skill({value,title}) {
    const[val,setVal]=useState(0)
    const classes = useStyles()
    useEffect(()=>{
        setTimeout(()=>{
            if (val<value){
                setVal(val=>val+5)
            }
        },100)},[val])
    // React.useEffect(() => {
    //     const timer = setInterval(() => {
    //        setVal((val) =>
    //          val + 5
    //        );
    //     }, 100);
    //     if (val===value){
    //     return () => {
    //      };
    //     }
    //  }, []);
    return (
        <div className={classes.root}>
            <Typography className={classes.rootTyp} variant='h6'>
                {title}
                <div className={classes.progressDiv}>
                    <Typography variant='body1'>{value}%</Typography>
                    <LinearProgress className={classes.linearProgress}   variant="determinate" value={val} />
                </div>
            </Typography>
        </div>
    )
}
