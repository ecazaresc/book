import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    Breadcrumbs,
    Typography,
    Grid,
    Box,
    IconButton,
    Button,
} from '@mui/material'
import { LangContext } from '../../../MyAppRoutes/MyAppRoutes'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import MoreWorkOptions from './MoreWorkOptions'
import LaunchIcon from '@mui/icons-material/Launch'

const ProyectContent = (props) => {
    let info = props.info
    let lang = useContext(LangContext)
    return (
        <Fragment>
            <Grid container spacing={5}>
                <Grid item xs={12} md={9}>
                    <Breadcrumbs style={{marginBottom:'20px'}} className='fade fade1'>
                        <Link to={'/home'}>{lang.home}</Link> / <Link to={'/home/w'}>{lang.mywork.work}</Link> / <Typography>{info.proyectName}</Typography>
                    </Breadcrumbs>
                    <Typography className='fade' variant='h4'>{info.proyectName}</Typography>
                    <Box sx={{display:'flex',alignItems:'center',mb:3,mt:2}}>
                        <a href='https://www.facebook.com/' target='_blank' rel="noreferrer"><IconButton><FacebookIcon /></IconButton></a>
                        <a href='https://www.instagram.com/?hl=en' target='_blank' rel="noreferrer"><IconButton><InstagramIcon /></IconButton></a>
                        <a href='mailto:ecazaresc@yahoo.com.mx'><IconButton><EmailIcon /></IconButton></a>
                    </Box>
                    
                    { info.proyectIntro? <Typography sx={{mb:3}} className='fade fade1' variant='h3'><span style={{textTransform:'capitalize'}}>{props.name}</span>{info.proyectIntro}</Typography>:null }

                    { info.info.map((item,index)=>{
                        return (
                            <Box key={item.subtitle} sx={{mt:6}}>
                                { item.buttonLabel? <Link to={item.buttonTarget}><Button startIcon={<LaunchIcon />} sx={{mb:3}} className='fade fade1' variant='contained'>{ item.buttonLabel }</Button></Link>:null }
                                <Typography variant='subtitle1' className='fade fade2' >{item.subtitle}</Typography>
                                <Typography variant='body1' className='fade fade3' sx={{mt:2}}>{item.body}</Typography>
                                { item.link? <a href={item.LinkTarget} target='_blank' rel="noreferrer"><Button startIcon={<LaunchIcon />} sx={{mt:2}} variant='outlined'>{ item.link }</Button></a>:null }
                                { item.img? <img style={{width:'100%',minHeight:10,backgroundColor:'#eee',marginTop:'20px'}} className='fade fade3' src={item.img} alt={item.img} />:null }
                                { item.body2? <Typography variant='body1' className='fade fade3' sx={{mt:2}}>{item.body2}</Typography>:null }
                                { item.img2? <img style={{width:'100%',minHeight:10,backgroundColor:'#eee',marginTop:'20px'}} className='fade fade3' src={item.img2} alt={item.img2} />:null }
                            </Box>
                        )
                    }) }

                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{position:'sticky',top:'50px'}}>
                        <MoreWorkOptions />
                    </Box>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default ProyectContent