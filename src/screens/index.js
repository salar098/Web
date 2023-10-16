import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ProfileImage from '../assets/images/ProfileImage.jpg'
import { getTranslate } from '../localization/index'
import { changeLanguage } from '../localization/index'
import Button from '@mui/material/Button';
import HomeScreen from './homeScreen';
import AboutScreen from './aboutScreen';
import ResumeScreen from './resumeScreen';
import PortfoliosScreen from './portfoliosScreen';
import ContactScreen from './contactScreen';
import { lang } from '../localization'
import "./index.css"
const drawerWidth = 260;

function ResponsiveDrawer(props) {
  const translate = getTranslate()
  const { window } = props;
  const [page, setPage] = useState(3);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#191d2b", height: "100vh", display: "flex", flexDirection: "column" }}>
      <Toolbar style={{ width: "100%", padding: "20px", borderRight: "1px solid #2e344e", borderBottom: "1px solid #2e344e", textAlign: "middle", backgroundColor: "#191d2b" }}>
        <img style={{ maxWidth: "100%", width: 200, height: 200, borderRadius: 100, border: "7px solid #2e344e", verticalAlign: "middle" }} src={ProfileImage} alt={translate.name} />
      </Toolbar>
      <Divider />
      <div style={{ backgroundColor: "#191d2b", flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <List style={{ width: "100%" }} >
          <ListItemButton className={page===0?null:'listItem'} style={{ backgroundColor: page === 0 ? "#037fff" : "transparent", paddingLeft: 0,paddingRight:0 }} onClick={() => { setPage(0); setMobileOpen(false) }} >
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText" style={{ color: page === 0 ? "#fff" : "#a4acc4" }} variant="body2">{translate.home}</Typography>}
            />
            <div className="overlay" />
          </ListItemButton>
          <ListItemButton className={page===1?null:'listItem'} style={{ backgroundColor: page === 1 ? "#037fff" : "transparent", paddingLeft: 0,paddingRight:0 }} onClick={() => { setPage(1); setMobileOpen(false) }}>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText" style={{ color: page === 1 ? "#fff" : "#a4acc4" }} variant="body2">{translate.about}</Typography>}
            />
            <div className="overlay" />
          </ListItemButton>
          <ListItemButton className={page===2?null:'listItem'} style={{ backgroundColor: page === 2 ? "#037fff" : "transparent", paddingLeft: 0,paddingRight:0 }} onClick={() => { setPage(2); setMobileOpen(false) }}>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText" style={{ color: page === 2 ? "#fff" : "#a4acc4" }} variant="body2">{translate.resume}</Typography>}
            />
            <div className="overlay" />
          </ListItemButton>
          <ListItemButton className={page===3?null:'listItem'} style={{ backgroundColor: page === 3 ? "#037fff" : "transparent", paddingLeft: 0,paddingRight:0 }} onClick={() => { setPage(3); setMobileOpen(false) }}>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText" style={{ color: page === 3 ? "#fff" : "#a4acc4" }} variant="body2">{translate.portfolios}</Typography>}
            />
            <div className="overlay" />

          </ListItemButton>
          <ListItemButton className={page===4?null:'listItem'} style={{ backgroundColor: page === 4 ? "#037fff" : "transparent", paddingLeft: 0,paddingRight:0 }} onClick={() => { setPage(4); setMobileOpen(false) }}>
            <ListItemText disableTypography={true}
              children={<Typography className="listItemText" style={{ color: page === 4 ? "#fff" : "#a4acc4" }} variant="body2">{translate.contact}</Typography>}
            />
            <div className="overlay" />
          </ListItemButton>
        </List>
      </div>
      <div style={{ padding: 15, borderTop: "1px solid #2e344e", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button onClick={() => { changeLanguage("fa") }} size="small" color={lang === "fa" ? "secondary" : "primary"}>FA</Button>
        <Typography>/</Typography>
        <Button onClick={() => { changeLanguage("en") }} size="small" color={lang === "en" ? "secondary" : "primary"}>EN</Button>
      </div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const getpage = () => {
    switch (page) {
      case 0:
        return <HomeScreen />
      case 1:
        return <AboutScreen />
      case 2:
        return <ResumeScreen />
      case 3:
        return <PortfoliosScreen />
      case 4:
        return <ContactScreen />

      default:
        return <HomeScreen />;
    }
  }
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <IconButton
        style={{ border: "1px solid #2e344e",position:"fixed",zIndex:1, borderRadius: 0, margin: 5, width: 50, height: 50, backgroundColor: "#191d2b", top: 20 }}
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
      //  style={{display:"flex",flexDirection:"column" ,justifyContent:"center", textAlign:"center"}}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {getpage()}
      </Box>
    </Box>
  );
}
export default ResponsiveDrawer;
