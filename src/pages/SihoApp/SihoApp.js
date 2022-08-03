import React, { Fragment } from 'react'
import {
    Routes,
    Route,
    Outlet,
} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Login from './components/Login'
import blue from '@mui/material/colors/blue'
import ResponsiveDrawer from './components/ResponsiveDrawer'
import Dashboard from './components/Dashboard'
import Capture from './components/Capture'

const theme = createTheme({
    palette: {
        primary: {
            main: blue[900],
        },
        secondary: {
            main: '#4FC3F7',
        },
    },
    typography: {
        h5: {
            fontWeight: 600,
        }
    },
    components:{
        MuiButton: {
            styleOverrides: {
                root: {
                  padding: '13px 25px'
                },
            },
        
        },
    }
});


const SihoApp = ({name})=>{
    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route element={<Fragment><Outlet /></Fragment>}>
                        <Route index element={<Login name={name} />}/>
                        <Route path={'/home'} element={<ResponsiveDrawer name={name} />}>
                            <Route index element={<Dashboard name={name} />}/>
                            <Route path={'/home/capture'} element={<Capture />}/>
                        </Route>
                    </Route>
                </Routes>
            </ThemeProvider>
        </Fragment>
    )
}
export default SihoApp