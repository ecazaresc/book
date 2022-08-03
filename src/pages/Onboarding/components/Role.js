import React,{Fragment,useContext} from 'react'
import {
    Typography,
    Grid,
    Button,
    Divider,
} from '@mui/material'
import {Link} from 'react-router-dom'
import {LangContext} from '../../MyAppRoutes/MyAppRoutes'

const Role = (props)=>{
    const lang = useContext(LangContext)
    const stylesBox = {
        animationDelay:'100ms',
        '& > div':{
            display: 'flex',
            flexDirection:'column',
            alignItems:'center',
            textAlign: 'center',
            padding: '0px 10px',
            marginTop: '30px',
        }
    }
    const designHandler = ()=>{
        props.onSendRole('design')
    }
    const engineerHandler = ()=>{
        props.onSendRole('engineer')
    }
    const recruitHandler = ()=>{
        props.onSendRole('recruit')
    }
    return (
        <Fragment>
            <Typography className={'fade'} variant='h3'>{lang.onboard.roleText}</Typography>
            <Grid container className={'fade'} sx={stylesBox}>
                <Grid item xs={12} sm>
                    <Link to={'/o/name-input'} onClick={engineerHandler}>
                        <Button variant='text'>{lang.onboard.roleEngine}</Button>
                    </Link>
                    <Typography variant="body2">{lang.onboard.roleEngineHelp}</Typography>
                </Grid>
                <Grid item><Divider orientation="vertical" /></Grid>
                <Grid item xs={12} sm>
                    <Link to={'/o/name-input'} onClick={designHandler}>
                        <Button variant='text'>{lang.onboard.roleDesign}</Button>
                    </Link>
                    <Typography variant="body2">{lang.onboard.roleDesignHelp}</Typography>
                </Grid>
                <Grid item><Divider orientation="vertical" /></Grid>
                <Grid item xs={12} sm>
                    <Link to={'/o/name-input'} onClick={recruitHandler}>
                        <Button variant='text'>{lang.onboard.roleRecruit}</Button>
                    </Link>
                    <Typography variant="body2">{lang.onboard.roleRecruitHelp}</Typography>
                </Grid>
                
            </Grid>
        </Fragment>
    )
}
export default Role