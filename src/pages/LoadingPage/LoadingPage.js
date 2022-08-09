import React, { Fragment, useContext } from 'react'
import { 
    Typography,
    Box,
    Grid,
} from '@mui/material'
import logo from '../../assets/images/ecazaresc_lg_logo.png'
import { LangContext } from '../MyAppRoutes/MyAppRoutes'

const LoadingPage = ()=>{
    const lang = useContext(LangContext)
    return(
        <Fragment>
            <Box>
                <Grid container justifyContent='center' alignItems='center' sx={{height:'100vh'}}>
                    <Grid item>
                        <img src={logo} alt={logo} style={{width:'220px',display:'block',margin:'10px auto'}} />
                        <Typography sx={{marginBottom:'10px',textAlign:'center'}} variant='h3'>{lang.loading}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}
export default LoadingPage