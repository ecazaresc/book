import React, {Fragment, useState} from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Divider,
    MenuItem,
    Grid,
    Typography
} from '@mui/material'

const actividadReciente = [
    {
      value: 'AR1',
      label: 'Actividad Reciente 1',
    },
    {
      value: 'AR2',
      label: 'Actividad Reciente 2',
    },
    {
      value: 'AR3',
      label: 'Actividad Reciente 3',
    },
    {
      value: 'AR4',
      label: 'Actividad Reciente 4',
    },
]
const clave = [
    {
      value: 'Clave',
      label: 'Clave asignada',
    },
]
const actividad = [
    {
      value: 'actv1',
      label: 'Actividad planeada 1',
    },
    {
      value: 'actv2',
      label: 'Actividad planeada 2',
    },
    {
      value: 'actv3',
      label: 'Actividad planeada 3',
    },
]


const DialogComponent = (props)=>{
    const [values, setValues] = useState({
        actividadesRecientes: '',
        clave: '',
        actividad: '',
    })
    const [x, setX] = useState(3)
    const handler = (prop)=> (e) =>{
        setValues({
            ...values,
            [prop]: e.target.value
        })
    }
    let {open} = props
    const handleClose = ()=>{
        setX(x+1)
        props.onSendClose({
            primary:'Clave',
            secondary:'Actividad ' + x,
            desc:'',
            time:{
                monday:0,
                tuesday:0,
                wendsday:0,
                thursday:0,
                friday:0,
                saturday:0,
                sunday:0,
            },
        })
        props.sendOpen(true)
    }
    
    return(
        <Fragment>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Nueva actividad</DialogTitle>
                    <DialogContent>
                        <Grid container columnSpacing={3} rowSpacing={2}>
                            <Grid item xs={12} md={8}>
                                <TextField
                                    sx={{mt:2}}
                                    id="actv"
                                    label="Actividades recientes"
                                    select
                                    value={values.actividadesRecientes}
                                    helperText="Opcional"
                                    onChange={handler('actividadesRecientes')}
                                    fullWidth
                                >
                                    {actividadReciente.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md>
                                <Typography variant='body2' sx={{lineHeight:'1rem',mt:1}}>Actividades recientes, elige alguna de tus actividades para ahorar tiempo</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider/>
                            </Grid>
                            <Grid item xs={12} md>
                                <TextField
                                    id="clave"
                                    label="Clave"
                                    select
                                    helperText=" "
                                    fullWidth
                                    value={values.clave}
                                    onChange={handler('clave')}
                                >
                                    {clave.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md>
                                <TextField
                                        id="actividad"
                                        label="Actividad"
                                        select
                                        helperText=" "
                                        fullWidth
                                        value={values.actividad}
                                        onChange={handler('actividad')}
                                    >
                                    {actividad.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>                                
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="desc"
                                    label="Descripción"
                                    type="text"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    
                   
                    </DialogContent>
                    <DialogActions sx={{px:3,pb:3}}>
                        <Button variant='outlined' onClick={handleClose}>Cancelar</Button>
                        <Button variant='contained' onClick={handleClose}>Guardar</Button>
                    </DialogActions>
                </Dialog>
        </Fragment>
    )
}
export default DialogComponent