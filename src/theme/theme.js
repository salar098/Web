import { createTheme } from '@mui/material/styles';
import palette from './palette';
import { getDirection,getFont } from '../localization';
let theme=createTheme()
 theme=createTheme({
    palette:palette,
    direction:getDirection(),
    spacing:2.5,
    typography:{
        h1:{
            fontSize:getDirection()==="ltr"?52:50,
            fontWeight:700,
            lineHeight:"4rem",
            fontFamily:getFont(),
            color:"#fff",
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?42:40,
            }
        },
        h2:{
            fontSize:getDirection()==="ltr"?40:38,
            fontWeight:700,
            lineHeight:"3.2857rem",
            fontFamily:getFont(),
            color:"#fff",
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?34:32,
            }
        },
        h3:{
            fontSize:getDirection()==="ltr"?32:30,
            fontWeight:600,
            lineHeight:"2.7rem",
            fontFamily:getFont(),
            textAlign:"left",
            color:"#fff",
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?30:28,
            }
        },
        h4:{
            fontSize:getDirection()==="ltr"?28:26,
            fontWeight:600,
            lineHeight:"2.43rem",
            fontFamily:getFont(),
            color:"#fff",
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?24:22,
            }
        },
        h5:{
            fontSize:getDirection()==="ltr"?23:21,
            fontWeight:600,
            lineHeight:"2.14rem",
            fontFamily:getFont(),
            color:"#fff",
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?20:18,
            }
        },
        h6:{
            fontSize:getDirection()==="ltr"?18:16,
            fontWeight:600,
            lineHeight:"1.857rem",
            fontFamily:getFont(),
            color:"#fff",
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?16:14,
            }
        },
        subtitle1:{
            fontSize:getDirection()==="ltr"?20:18,
            fontWeight:400,
            lineHeight:"2rem",
            fontFamily:getFont(),
            marginTop:15,
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?17:15,
            }
        },
        subtitle2:{
            fontSize:"4.5rem"
        },
        body1:{
            fontSize:getDirection()==="ltr"?18:16,
            lineHeight:"1.8rem",
            color:"#a4acc4",
            fontFamily:getFont(),
            fontWeight:400,
            textAlign:getDirection()==="ltr"?"left":"justify",
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?15:13,
            }
        },
        body2:{
            fontSize:getDirection()==="ltr"?15:13,
            color:"#a4acc4",
            fontFamily:getFont(),
            fontWeight:600,
            letterSpacing:1,
            textAlign:"center",
            [theme.breakpoints.down("sm")]:{
                fontSize:getDirection()==="ltr"?13:11,
            }
        },
        button:{
            fontSize:getDirection()==="ltr"?14:12,
            color:"#fff",
            fontFamily:getFont(),
            fontWeight:400,
            letterSpacing:2,
        }
    }
})
export default theme