import React, { Fragment, useEffect } from 'react'
import { 
    Typography,
    Box,
    Grid,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/ecazaresc_lg_logo.png'

const NoMatch = ()=> {
    const navigate = useNavigate()
    useEffect(
        ()=>{
            setTimeout(()=>navigate('/'),3500)
        }
    )
    return(
        <Fragment>
            <Box>
                <Grid container justifyContent='center' alignItems='center' sx={{height:'100vh'}}>
                    <Grid item>
                        <img src={logo} alt={logo} style={{width:'220px',display:'block',margin:'10px auto'}} />
                        <Typography style={{marginBottom:'10px'}} variant='h3'>Parece que la url a la que intentaste ingresar no existe.</Typography>
                        <Typography variant='h3'>Te estamos redireccionando al inicio...</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}
export default NoMatch