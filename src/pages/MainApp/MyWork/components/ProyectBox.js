import { 
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Chip,
} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'
import React, { Fragment,useState, useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { LangContext } from '../../../MyAppRoutes/MyAppRoutes'

const ProyectBox = (props)=> {
    let info = props.info
    let navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null);
    const lang = useContext(LangContext)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handler = ()=>{
        navigate('/home/w/' + info.target)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    return (
        <Fragment>
            
                <Box sx={{
                    bgcolor: 'background.paper',
                    mt: 2,
                }}>
                    
                    <Box sx={{
                            width:'100%',
                            height:{
                                xs:'20vh',
                                sm:'25vh',
                                md:'38vh',
                            },
                            overflow:'hidden',
                            backgroundImage:`url(${info.img})`,
                            backgroundSize:'cover',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            p:1,
                            cursor:'pointer',
                        }} onClick={handler}>
                            { info.software.map((soft,index)=>{
                                return (
                                    <Chip key={soft + index} size="small" sx={{mb:1}} label={soft} color='secondary' />
                                )
                            }) }
                                
                    </Box>
                    <Box sx={{
                            px:3,
                            pt:{
                                xs:2,
                                sm:3,
                            },
                            pb:{
                                xs:2,
                                sm:3,
                            },
                            display:'flex',
                            flexDirection:{
                                xs:'row',
                                sm:'column',
                            },
                            justifyContent:'space-between',
                        }}>
                        <Stack spacing={1}>
                            <Box onClick={handler} sx={{cursor:'pointer',}}>
                                <Typography variant='subtitle1' sx={{mb:1}}>
                                    { info.design.proyectName }
                                </Typography>
                                <Typography variant='body2'>
                                    { info.category }
                                </Typography>
                                
                            </Box>
                        </Stack>
                        <Box sx={{mt:1}}>
                                <IconButton
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <ShareIcon />
                                </IconButton>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}><a href='https://www.facebook.com/' target='_blank' rel="noreferrer">{lang.facebook}</a></MenuItem>
                                    <MenuItem onClick={handleClose}><a href='https://www.instagram.com/?hl=en' target='_blank' rel="noreferrer">{lang.instagram}</a></MenuItem>
                                    <MenuItem onClick={handleClose}><a href='mailto:ecazaresc@yahoo.com.mx'>{lang.email}</a></MenuItem>
                                    
                                </Menu>
                        </Box>
                    </Box>
                </Box>
            
        </Fragment>
    )
}
export default ProyectBox