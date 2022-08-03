import React,{ Fragment,useState } from "react"
import {
    Typography,
    Grid,
    Button,
    Stack,
    Box
} from '@mui/material'

const CaptureHour = (props)=>{
    const [disabledButtons, setDisabledButtons] = useState(false)
    const [enterTime, setEnterTime] = useState('sin datos')
    const d = new Date();
    let day = d.getDay()
    let month = d.getMonth()
    switch (month){
        case 0:
            month = 'Enero'
        break
        case 1:
            month = 'Febrero'
        break
        case 2:
            month = 'Marzo'
        break
        case 3:
            month = 'Abril'
        break
        case 4:
            month = 'Mayo'
        break
        case 5:
            month = 'Junio'
        break
        case 6:
            month = 'Julio'
        break
        case 7:
            month = 'Agosto'
        break
        case 8:
            month = 'Septiembre'
        break
        case 9:
            month = 'Octubre'
        break
        case 10:
            month = 'Noviembre'
        break
        default:
            month = 'Diciembre'
    }
    let year = d.getFullYear()
    let hour = d.getHours()
    let minutes = d.getMinutes()

    const handleEnter = ()=>{
        props.sendOpen(true)
        setDisabledButtons(true)
        setEnterTime(hour + ':' + minutes)
    }
    return (
        <Fragment>
            <Typography variant='body1'>Registra la entrada/salida del día de hoy</Typography>
            <Typography variant='h6'>Hora actual {hour + ':' + minutes}</Typography>
            <Typography variant='body1'>Tu ubicación actual:</Typography>
            <iframe title='locationId' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60218.78904040394!2d-99.14764066182047!3d19.383249816935468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff320a9dae87%3A0xbe4882917ea64e9b!2sPraxis+Mexico!5e0!3m2!1ses-419!2smx!4v1559162039967!5m2!1ses-419!2smx"
                style={{
                    width:'100%',
                    border:'none',
                    marginTop:'10px',
                    marginBottom:'10px',
                }}
            >
            </iframe>
            <Grid container rowSpacing={2}>
                <Grid item xs={12} sm={12} md>
                    <Typography variant='h6'>{day + ' / ' + month + ' / ' + year}</Typography>
                    <Typography variant='body1' component='div'>Entrada registrada: <Box sx={{fontWeight:900,display:'inline'}}>{ enterTime }</Box></Typography>
                    <Typography variant='body1'>Salida registrada: sin datos</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md>
                    <Stack>
                        <Button disabled={disabledButtons} onClick={handleEnter} variant='contained' sx={{mb:2}}>Registrar entrada</Button>
                        <Button disabled={!disabledButtons} variant='contained'>Registrar salida</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default CaptureHour