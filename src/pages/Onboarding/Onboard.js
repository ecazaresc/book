import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React, {Fragment} from 'react'
import { Outlet,Link } from 'react-router-dom'
import style from './onboard.module.css'
import logo from '../../assets/images/ecazaresc_lg_logo.png'

const Onboard = (props)=> {
    
    
    return(
        <Fragment>
            <Box sx={{
                    display:'flex',
                    minHeight:'100vh',
                    width:'100vw',
                    justifyContent:'center'
                }}>
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    width:'75vw',
                    p: {
                        xs: 1,
                        md: 9,
                        lg: 20,
                    }
                    }}>
                    <img style={{width:'210px',mb:3}} src={logo} alt={logo} /> 
                    <span style={{flexGrow:'1'}}></span>
                    <Outlet/>
                    <span style={{flexGrow:'1'}}></span>
                    <span style={{flexGrow:'1'}}></span>
                </Box>
                <aside className={style.image}>
                    <Typography variant='body2' sx={{color:'common.white',fontSize:11}}>
                        Photo by Marek Piwnicki: https://www.pexels.com/photo/red-blue-and-green-light-12214884/
                    </Typography>
                    { props.skipButton? <Link to={'/o/greetings'}><Button variant="text" sx={{color:'common.white'}}>Skip Intro</Button></Link>:null }
                </aside>
            </Box>
        </Fragment>
    )
}
export default Onboard