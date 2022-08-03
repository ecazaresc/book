import React, {Fragment,useState} from 'react'
import { 
    Box,
    Button,
    Grid,
    Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import CaptureHour from './CaptureHour'
import SnackBarComponent from './SnackBarComponent'
import img from '../../../assets/images/ecazaresc_lg_5.jpg'

const Dashboard = (props)=>{
    const { name } = props
    const [open, setOpen] = useState(false)
    
    
    return(
        <Fragment>
            <Grid container spacing={5}>
                <Grid item xs={12} md={8} lg={7}>
                    <Typography variant='h5' sx={{mb:3}}>Dashboard</Typography>
                    <CaptureHour sendOpen={()=>setOpen(true)} />
                    <SnackBarComponent open={open} sendClose={()=>setOpen(false)}/>
                </Grid>
                <Grid item xs={12} md={4} lg={5}>
                    <Typography variant='h5' sx={{mb:3}}>Bienvenido {name}</Typography>
                    <Box sx={{
                        height:'100px',
                        backgroundImage: `url(${img})`,
                        backgroundPosition:'center',
                        mb:2,
                        p:3,
                    }}>
                        <Typography sx={{color:'#fff'}} variant='h5'>Algún banner</Typography>
                    </Box>
                    <Link to={'/sihoApp/home/capture'}><Button variant='outlined'>Captura de actividades</Button></Link>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default Dashboard