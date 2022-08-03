import React, { Fragment } from 'react'
import { 
    Box,
    Typography,
    Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Submenu = (props)=> {
    let {info} = props
    let navigate = useNavigate()
    return (
        <Fragment>
            <Box sx={{
                   my:10,
                //    position:'sticky',
                //     top: '15%',
                //     bgcolor:'background.default',
                }}>
                <Typography variant='h5'>{info.title}</Typography>
                <ul>
                    { info.bullets.map((info,index)=>{
                        return (
                            <li key={info + index}>{info}</li>
                        )
                    }) }
                </ul>
                
                { info.button? 
                    info.external?
                        <a href={info.target} target='_blank' rel="noreferrer"><Button variant='contained'>{info.label}</Button></a>
                    :
                    <Button onClick={()=>{
                        navigate(info.target)
                        document.body.scrollTop = 0
                        document.documentElement.scrollTop = 0
                    }} variant='contained'>{ info.label }</Button>
                    :null
                }
            </Box>
        </Fragment>
        
    )
}
export default Submenu