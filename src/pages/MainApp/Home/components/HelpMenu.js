import React, {useState, useContext} from 'react'
import Menu from '@mui/material/Menu'
import { 
    IconButton,
    Box,
 } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { LangContext } from '../../../MyAppRoutes/MyAppRoutes'
import { useNavigate } from "react-router-dom"
import cv from '../../../../assets/images/ecazaresc_lg_logo.png'
import MenuIcon from '@mui/icons-material/Menu';

export default function HelpMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const lang = useContext(LangContext)
  const open = Boolean(anchorEl);
 const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{
            position:'fixed',
            top:'25px',
            right:'25px',
            zIndex:'10',
        }}>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
          
        <MenuItem sx={{
            display:{
              xs:'none',
              sm:'flex',
            },
          }} onClick={()=>{
          setAnchorEl(null)
          navigate('/home/w')
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        }}>{lang.restOfMyWork}</MenuItem>
        <MenuItem onClick={handleClose}><a href={cv} download='Esteban_Cazares_Cruz_Cv'>{lang.homeText.downloadCv}</a></MenuItem>
        <MenuItem onClick={()=>{
            setAnchorEl(null)
            props.themeSend(true)
        }}>{lang.lightTheme}</MenuItem>
        <MenuItem onClick={()=>{
            setAnchorEl(null)
            props.themeSend(false)
        }}>{lang.darkTheme}</MenuItem>
        <MenuItem onClick={()=>{
                setAnchorEl(null)
                navigate('/')
            }}>{lang.homeText.restart}</MenuItem>
      </Menu>
    </Box>
  );
}
