import React, { Fragment, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LangContext } from '../MyAppRoutes/MyAppRoutes'
import {
    Box,
    Typography,
} from '@mui/material'
import img from '../../assets/images/ecazaresc_lg_1.jpg'

const AppTransition = (props)=>{
    let lang = useContext(LangContext)
    let navigate = useNavigate()

    useEffect (
        ()=>{
            setTimeout(()=>{
                if(props.direction){
                    props.onSendDirection(false)
                    navigate('/sihoApp')
                } else {
                    props.onSendDirection(true)
                    navigate('/home/')
                }
                
            },3000)
            
        }
    )
    return (
        <Fragment>
            <Box sx={{width:'100%',height:'100vh',display:'flex'}}>
                <Box sx={{
                    display:{
                        xs:'none',
                        sm:'block',
                    },
                    width: '40vw',
                    backgroundImage: `url(${img})`,
                }}>
                </Box>
                <Box sx={{
                    flexGrow: '1',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent: 'center',
                    px:{
                        xs:3,
                        sm:8,
                        md:15,
                        lg:25,
                    }
                }}>
                        <Typography variant='h2' className='fade'>
                            <span style={{textTransform:'capitalize'}}>{ props.name }, </span>
                            { props.direction? 
                                lang.enterApp 
                                :
                                lang.leaveApp
                            }
                        </Typography>
                        <Typography className='fade fade1' variant='h6' sx={{mt:4}}>{lang.onboard.takeasec}...</Typography>
                </Box>
            </Box>
        </Fragment>
    )
}
export default AppTransition