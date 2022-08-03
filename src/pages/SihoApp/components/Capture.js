import React, {Fragment,useState} from 'react'
import {
    Grid,
    Typography,
    TextField,
} from '@mui/material'
import ListComponent from './ListComponent'
import SnackBarComponent from './SnackBarComponent'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


function Calendar({ children }) {
    return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        {children}
      </LocalizationProvider>
    );
  }
const Capture = ()=>{
    const [openSnack, setOpenSnack] = useState(false)
    const [open, setOpen] = useState(false)
    
    const [value, setValue] = React.useState(new Date())
    return(
        <Fragment>
            <Grid sx={{minHeight:'90vh',pb:13}} container spacing={4}>
                <Grid item xs={12} sm={12} md={5} sx={{
                            borderRight: {
                                md:'1px solid rgba(0, 0, 0, 0.3)',
                            },
                            px:{
                                xs:2,
                                md:4,
                            }
                        }}>
                    <Typography variant='h5' sx={{mb:2}}>Captura de actividades</Typography>
                    <Typography variant='body1' sx={{mb:2}} >Elige una día para comenzar</Typography>
                    <Calendar>
                        <StaticDatePicker
                                displayStaticWrapperAs="desktop"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue)
                                    setOpen(true)
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                    </Calendar>
                    
                    <Typography sx={{mt:3}} variant='body1'>Recuerda que debes registrar 40h por cada semana</Typography>
                    <Typography variant='body1'>Los días no facturables no se registrarán en el proyecto pero es importante registrarlos aquí</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <ListComponent sendOpen={()=>setOpenSnack(true)} opened={open}/>
                    <SnackBarComponent open={openSnack} sendClose={()=>setOpenSnack(false)}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default Capture