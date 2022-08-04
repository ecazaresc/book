import React, { Fragment } from 'react'
import { 
    Typography,
    Box,
    Stack,
    Chip,
} from '@mui/material'
import { useNavigate} from 'react-router-dom'

const ProyectBox = (props)=> {
    let info = props.info
    let navigate = useNavigate()

    
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
                    cursor:'pointer',
                }} onClick={handler} >
                    
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
                            backgroundPosition:'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                            p:1,
                            transition:'all 0.5s',
                            '&:hover':{
                                backgroundPosition:'left',
                            },
                        }}>
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
                            <Typography variant='subtitle1' sx={{mb:1}}>
                                { info.design.proyectName }
                            </Typography>
                            <Typography variant='body2'>
                                { info.category }
                            </Typography>
                        </Stack>
                        
                    </Box>
                </Box>
            
        </Fragment>
    )
}
export default ProyectBox