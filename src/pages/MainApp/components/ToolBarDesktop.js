import React, {useContext} from 'react'
import {
    CssBaseline,
    Toolbar,
    AppBar,
    useScrollTrigger,
    Box,
    Slide,
    Button,
} from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer'
import HomeIcon from '@mui/icons-material/Home'
import { LangContext } from '../../MyAppRoutes/MyAppRoutes'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/ecazaresc_lg_logo.png'


function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ToolBarDesktop(props) {
    let lang = useContext(LangContext)
    let navigate = useNavigate()
  return (
    <React.Fragment>
      <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar>
            <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                      <img onClick={()=>{
                          navigate('/home')
                          document.body.scrollTop = 0
                          document.documentElement.scrollTop = 0
                      }} style={{width:'150px',marginLeft:'20px',cursor:'pointer'}} src={logo} alt='not found'/>
                    </Box>
                    <Button startIcon={<HomeIcon />} onClick={()=>{
                            navigate('/home')
                            document.body.scrollTop = 0
                            document.documentElement.scrollTop = 0
                        }} variant='text'>{lang.home}
                    </Button>
                    <Button startIcon={<ComputerIcon />} variant='text' onClick={()=>{
                            navigate('/home/w')
                            document.body.scrollTop = 0
                            document.documentElement.scrollTop = 0
                        }}>{lang.restOfMyWork}
                    </Button>
            </Toolbar>
            </AppBar>
        </HideOnScroll>
      
      <Toolbar />
    </React.Fragment>
  );
}






