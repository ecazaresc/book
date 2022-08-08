import { 
    Typography,
    Button,
    Divider,
    Grid,
 } from '@mui/material'
import React, { 
    Fragment,
    useContext,
 } from 'react'
import {Link} from 'react-router-dom'
import { LangContext } from '../../MyAppRoutes/MyAppRoutes'
import cv from '../../../assets/images/Esteban_Cazares_Cruz_UX.pdf'


const Language = (props)=>{
    const lang = useContext(LangContext)
    
    const languagePickEn = ()=>{
        props.onSendLang(true)
    }
    const languagePickEs = ()=>{
        props.onSendLang(false)
    }
    return(
        <Fragment>
            <Typography className={'fade'} variant='h2'>{lang.onboard.welcome}</Typography>
            <Typography className={'fade'} variant='h3'>{lang.onboard.welcomeText}</Typography>
            <Grid container justifyContent='center' style={{animationDelay:'100ms',margin:'30px 0px'}} className={'fade'}>
                <Grid item>
                    <Link to={'/o/role'} onClick={languagePickEn}><Button variant='text'>English</Button></Link>
                </Grid>
                <Grid item><Divider orientation="vertical" /></Grid>
                <Grid item>
                    <Link to={'/o/role'} onClick={languagePickEs}><Button variant='text'>Español</Button></Link>
                </Grid>
            </Grid>
            <Typography style={{textAlign:'center'}} variant='body2'>{lang.onboard.cvdownload} <a className='link' href={cv} download='Esteban_Cazares_Cruz_Cv'>{lang.onboard.here}</a></Typography>
        </Fragment>
    )
}
export default Language