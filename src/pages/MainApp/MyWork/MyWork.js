import React, { Fragment, useContext } from 'react'
import {
    Typography,
    Box,
    Grid,
    Breadcrumbs,
    Button,
} from '@mui/material'
import { LangContext } from '../../MyAppRoutes/MyAppRoutes'
import { Link, useNavigate } from 'react-router-dom'
import ProyectBoxContainer from './components/ProyectBoxContainer'
import ScrollCategory from './components/ScrollCategory'
import HomeIcon from '@mui/icons-material/Home'
import style from '../Home/home.module.css'

export const MyWork = ()=> {
    const lang = useContext(LangContext)
    const navigate = useNavigate()
    return (
        <Fragment>
            
            <Box sx={{
                px: {
                    xs: 3,
                    sm: 4,
                    md: 12,
                    lg: 15,
                },
                pt: {
                    xs: 7,
                    md: 15,
                },
                pb:20,
            }}>
                <Button startIcon={<HomeIcon />}
                    sx={{
                        position:'absolute',
                        top:'20px',
                        left:'20px',
                        display:{
                            xs:'none',
                            sm:'flex',
                        }
                    }} 
                    variant='text'
                    onClick={()=>{
                        navigate('/home')
                        document.body.scrollTop = 0
                        document.documentElement.scrollTop = 0
                    }}>
                    {lang.home}
                </Button>
                <Grid container columnSpacing={0}>
                    <Grid item xs={12} lg={10}>
                        <Typography className='fade' variant="h2" sx={{mb:2,textAlign:'center'}}>
                            { lang.restOfMyWork }
                        </Typography>
                        <Breadcrumbs sx={{display:'flex',justifyContent:'center',mb:2}} className='fade fade1'>
                            <Link to={'/home'}>{lang.home}</Link> / <Typography>{lang.restOfMyWork}</Typography>
                        </Breadcrumbs>
                        <div className={style.textDecoration}>{lang.mywork.work}</div>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <ProyectBoxContainer
                            info1={lang.mywork.siho} info2={lang.mywork.kiosk} info3={lang.mywork.anew}
                        />
                        <ProyectBoxContainer
                            info1={lang.mywork.book} info2={lang.mywork.smonkeys} info3={lang.mywork.dentalist}
                        />
                        <ProyectBoxContainer
                            info1={lang.mywork.employCode} info2={lang.mywork.orange} info3={lang.mywork.sucream}
                        />
                    </Grid>
                    <Grid item md={6} lg={2}>
                        <ScrollCategory />
                    </Grid>
                </Grid>
            </Box>
            
        </Fragment>
    )
}
export default MyWork
