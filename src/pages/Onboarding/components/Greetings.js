import React, { Fragment,useContext,useEffect } from 'react'
import { 
    Typography,
 } from '@mui/material'
import { LangContext } from '../../MyAppRoutes/MyAppRoutes'
import { useNavigate } from 'react-router-dom'

const Greetings = (props)=> {
    const lang = useContext(LangContext)
    let navigate = useNavigate()
    let text

    if(props.profile === 'Guest') {
        text = 'You are entering with a basic profile'
    } else {
        text = lang.onboard.welcome + ' ' + props.profile + '!'
    }
    useEffect(
        ()=>{
            setTimeout(()=>{
                navigate('/home')
            },3500)
        }
    )
    return(
        <Fragment>
            <Typography variant='h2' style={{textTransform:'capitalize'}}>
                { text }
            </Typography>
            <Typography variant='body1'>{lang.onboard.takeasec}...</Typography>
        </Fragment>
    )
}
export default Greetings