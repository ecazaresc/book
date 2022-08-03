import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { useNavigate } from 'react-router-dom'
import ComputerIcon from '@mui/icons-material/Computer'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices'
import { LangContext } from '../../MyAppRoutes/MyAppRoutes'
import HomeIcon from '@mui/icons-material/Home'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
    const navigate = useNavigate()
    const lang = React.useContext(LangContext)
  return (
    <Box sx={{ 
        width: '100%',
        display:{
          xs:'block',
          sm:'none',
        },
        position:'fixed',
        bottom:'0px',
        right:'0px',
        left:'0px',
       }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=>{
            navigate('/home')
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }} label={lang.home} icon={<HomeIcon />} />
        <BottomNavigationAction onClick={()=>{
            navigate('/home/w')
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }} label={lang.mywork.work} icon={<ComputerIcon />} />
        <BottomNavigationAction onClick={()=>{
              navigate('/home/w/siho')
              document.body.scrollTop = 0
              document.documentElement.scrollTop = 0
            }} label={lang.mywork.siho.design.proyectName} icon={<ImportantDevicesIcon />} />
      </BottomNavigation>
    </Box>
  );
}
