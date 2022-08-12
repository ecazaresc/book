import React, { Fragment, useContext } from 'react'
import {
    Typography,
    Box,
    Grid,
    Breadcrumbs,
} from '@mui/material'
import { LangContext } from '../../MyAppRoutes/MyAppRoutes'
import { Link } from 'react-router-dom'
import ProyectBoxContainer from './components/ProyectBoxContainer'
import ScrollCategory from './components/ScrollCategory'
import style from '../Home/home.module.css'
import ToolBarDesktop from '../components/ToolBarDesktop'

export const MyWork = ({history})=> {
    const lang = useContext(LangContext)
    
    return (
        <Fragment>
            <Box sx={{
                display:{
                    xs:'none',
                    sm:'block',
                }
            }} >
                <ToolBarDesktop history={history} />
            </Box>
            
            <Box sx={{
                px: {
                    xs: 3,
                    sm: 4,
                    md: 12,
                    lg: 15,
                },
                pt: {
                    xs: 4,
                    md: 8,
                },
                pb:20,
            }}>
                
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
                            info1={lang.mywork.sucream} info2={lang.mywork.orange} info3={lang.mywork.employCode}
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
