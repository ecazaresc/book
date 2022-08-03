import React, {Fragment,useState} from 'react'
import { 
    IconButton,
    List,
    ListItem,
    Typography,
    ListItemText,
    Box,
    Button,
    Divider,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DialogComponent from './DialogComponent'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'


const ListComponentsItems = ({activity})=>{
    return(
        <Fragment>
            <ListItem
                secondaryAction={
                    <Fragment>
                        <IconButton  sx={{mr:2}} edge="end" aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Fragment>
                }
                >
                    <ListItemText
                        primary={activity.primary}
                        secondary={activity.secondary}
                    />
            </ListItem>
            <Divider></Divider>
        </Fragment>
        
    )
}

const ListComponent = (props)=>{
    const {opened} = props
    const [open, setOpen] = useState(false)
    let [ activities, setActivities ] = useState([])
    const [hideButton, setHideButton] = useState(false)
    
    const buttonStyle = {
        position:{
            xs:'fixed',
            md:'static'
        },
        bottom:{
            xs:'60px',
        },
        right:'60px',
        zIndex:'9999',
        display: hideButton? 'none':'flex'
    }
    const handleClose = (data) => {
        setOpen(false)
        setActivities([
            ...activities,
            data,
        ])
        setHideButton(false)
    }
    
    const handleClickOpen = ()=>{
        setOpen(true)
        setHideButton(true)
    }
    return(
        <Fragment>
            { 
                opened?
                    <Button sx={buttonStyle} startIcon={<AddIcon />} variant='contained' onClick={handleClickOpen} color='secondary'>CREAR</Button>
                :null
            }
            { 
                activities.length > 0 && opened?
                <Box sx={{width:'100%',pt:4}}>
                    <Typography variant='body1'>Actividades registradas exitosamente:</Typography>
                    <List>
                        {
                            activities.map((activity,index)=>{
                                return (
                                    <ListComponentsItems key={activity + index} activity={activity} />
                                )
                                
                            })
                        }
                    </List>
                    
                </Box>
                :
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <Typography variant='h6'>Aun no tienes actividades registradas</Typography>
                </Box>
                
            }
                <DialogComponent open={open} sendOpen={()=>{props.sendOpen(true)}} onSendClose={handleClose} />
                  
        </Fragment>
    )
}
export default ListComponent