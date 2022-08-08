import React, { Fragment, useContext } from "react"
import {
    Box,
    CssBaseline,
    Typography,
} from '@mui/material'
import { useNavigate } from "react-router-dom"
import style from '../home.module.css'
import image from '../../../../assets/images/ecazaresc_lg_2.jpg'
import { LangContext } from "../../../MyAppRoutes/MyAppRoutes"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import img1 from '../../../../assets/images/ecazaresc_lg_1.jpg'
import img2 from '../../../../assets/images/ecazaresc_lg_3.jpg'
import img3 from '../../../../assets/images/ecazaresc_lg_4.jpg'


const HomeMenuDesktop = ({name, role})=> {
    const lang = useContext(LangContext)
    const navigate = useNavigate()
    let img,author
    if (role === 'design') {
        img = img1
        author = 'Photo by Marek Piwnicki: https://www.pexels.com/photo/red-blue-and-green-light-12214884/'
    } else if (role === 'engineer') {
        img = img2
        author = 'Photo by Neo: https://www.pexels.com/photo/lines-of-code-2653362/'
    } else {
        img = img3
        author = 'Photo by Irina Iriser: https://www.pexels.com/photo/top-view-photo-of-green-plants-1090972/'
    }

    return (
        <Fragment>
            <CssBaseline/>
            <Box className=' fade fade1' sx={
                    {
                        backgroundImage: `url(${img})`,
                        backgroundPosition:'center',
                        position: 'fixed',
                        bottom:'0px',
                        bgcolor:'#eee',
                        height:'100vh',
                        p:3,
                        backgroundSize: 'cover',
                        zIndex:'100',
                        width: {
                            sm:'35vw',
                        },
                        display: {
                            xs:'none',
                            sm:'block',
                        }

                    }
                }>
                <Typography variant='body2' sx={{color:'common.white',fontSize:11}}>
                    { author }
                </Typography>
                <Box onClick={()=>{
                      document.body.scrollTop = 0
                      document.documentElement.scrollTop = 0
                      navigate('/home/w')
                }} className='fade' sx={{
                        color:'common.white',
                        position: 'absolute',
                        bottom: '15%',
                        cursor:'pointer',
                        left:'20%',
                    }}>
                    <p style={{margin:'0px'}}>{lang.mywork.work}</p>
                    <p className={style.cardTitle}>{lang.restOfMyWork} <KeyboardArrowRightIcon /></p>
                </Box>
                <Box onClick={()=>{
                    navigate('/home/w/siho')
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                }}  className={style.card + ' fade'} sx={
                        {
                            bottom:'33%',
                            right:'-5%',
                            width:{
                                sm:'95%',
                                md:'75%',
                            },
                            height:'40%',
                            backgroundImage: `url(${image})`,
                            backgroundPosition:'center',
                            '&:hover':{
                                backgroundPosition:'right center',
                            }
                        }
                    }>
                        <Box className={style.cardOverlay} sx={{
                            p: {
                                sm:6,
                                md:5,
                                lg:6,
                            },
                        }}>
                            <p style={{margin:'0px'}}>{lang.mywork.work}</p>
                            <p className={style.cardTitle}>{lang.mywork.siho.design.proyectName} <KeyboardArrowRightIcon /></p>
                        </Box>
                </Box>
                
            </Box>
        </Fragment>
    )
}
export default HomeMenuDesktop