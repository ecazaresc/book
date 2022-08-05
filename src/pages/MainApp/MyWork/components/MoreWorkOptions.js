import React,{useContext} from "react"
import {
    Box,
    Typography,
    Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { LangContext } from "../../../MyAppRoutes/MyAppRoutes"
import HomeIcon from '@mui/icons-material/Home'

const MoreWorkOptions = ()=>{
    let lang = useContext(LangContext)

    let navigate = useNavigate()
    let styleButton = {
        fontFamily:'MontserratBold',
        color:'primary.main',
        textTransform: 'uppercase',
        my:3,
        cursor:'pointer',
    }

    return(
        <Box sx={{
            '& a':{
                fontFamily:'MontserratBold',
                display:'block',
                my:1,
            }
        }}>
            <Typography variant='h6'>{lang.mywork.moreWork}</Typography>
            <Box sx={styleButton} onClick={()=>{
                    navigate('/home/w')
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }}>{lang.restOfMyWork}
            </Box>
            <Box sx={styleButton} onClick={
                ()=>{
                    navigate('/home/w/siho')
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }
            }>{lang.mywork.siho.design.proyectName}
            </Box>
            <Box sx={styleButton} onClick={()=>{
                    navigate('/home/w/book')
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }}>{lang.mywork.book.design.proyectName}
            </Box>
            <Box sx={styleButton} onClick={()=>{
                    navigate('/home')
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }}><Button startIcon={<HomeIcon />} variant='contained'>{lang.home}</Button>
            </Box>
        </Box>
    )
}
export default MoreWorkOptions