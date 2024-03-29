import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {Stack} from '@mui/material'
import { Outlet,useNavigate } from 'react-router-dom'

const drawerWidth = 240

function ResponsiveDrawer(props) {
    const navigate = useNavigate()
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { name } = props
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
    let menuItems = [
        {
            text:'Dashboard',
            target:'/sihoApp/home',
        },
        {
            text:'Captura de actividades',
            target:'/sihoApp/home/capture',
        },
        {
            text:'Plantilla UI',
            target:'/sihoApp/home/template',
        },
    ]
    let menuItem2 = [
        {
            text:'Cerrar sesión',
            target:'/sihoApp',
        },
        {
            text:'Regresar a mi book',
            target:'/transition',
        },
    ]
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Stack sx={{py:2,px:3}}>
        <Box sx={{
            width:'60px',
            height:'60px',
            borderRadius:'50%',
            bgcolor:'#D9D9D9',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color: '#737373',
            textTransform:'uppercase',
            fontSize:27,
          }}>{name.slice(0, 1)}</Box>
          <Typography variant='h6' sx={{textTransform:'capitalize',mt:1}}>{name}</Typography>
          <Typography variant='body1'>{name}@email.com</Typography>
      </Stack>
        
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={()=>navigate(item.target)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menuItem2.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={()=>navigate(item.target)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" sx={{position:'relative',transform:'scale(0.7)',top:'-2px'}} component="div">
            <b>SIHO</b>
            <span style={{fontSize:'10px', position:'absolute',bottom:'-4px',right:'-20px'}}>praxis.com</span>
          </Typography>
        </Toolbar>
      </AppBar>
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
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default ResponsiveDrawer
