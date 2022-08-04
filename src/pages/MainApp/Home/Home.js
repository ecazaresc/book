import React, {
    useState,
    useContext,
    useRef,
} from 'react'
import { 
    Box,
    Typography,
    Grid,
    Button,
    Stack,
 } from '@mui/material'
import HomeMenuDesktop from './components/HomeMenuDesktop'
import Footer from './components/Footer'
import HelpMenu from './components/HelpMenu'
import logo from '../../../assets/images/ecazaresc_lg_logo.png'
import Submenu from './components/Submenu'
import { LangContext } from '../../MyAppRoutes/MyAppRoutes'
import style from './home.module.css'
import image from '../../../assets/images/ecazaresc_lg_2.jpg'
import cv from '../../../assets/images/ecazaresc_lg_2.jpg'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import DownloadIcon from '@mui/icons-material/Download'

const Home = (props)=> {
    const lang = useContext(LangContext)
    const testElement = useRef(null)
    const [scY, setScY] = useState(false)
    const [x, setX] = useState(0)
    
    window.onscroll = (event) => { 
        setScY(window.scrollY)
        let scYNew = window.scrollY
        //let docHeight = document.body.offsetHeight
        if(scYNew > scY){
            //its down
        } else {
            //its up
        }
        if(scY > '500'){
            setX(x + 1)
        }

        // console.log(testElement.current.offsetHeight)
        // console.log(docHeight)
    }
    let infoPosition
    if (props.role === 'design')  {
        infoPosition = [
            lang.homeText.designinfo,
            lang.homeText.devinfo,
            lang.homeText.softwareinfo,
            lang.homeText.experienceinfo,
            lang.homeText.academyinfo,
            lang.homeText.aboutme,
        ]
    } else if (props.role === 'engineer') {
        infoPosition = [
            lang.homeText.devinfo,
            lang.homeText.designinfo,
            lang.homeText.softwareinfo,
            lang.homeText.experienceinfo,
            lang.homeText.academyinfo,
            lang.homeText.aboutme,
        ]
    } else {
        infoPosition = [
            lang.homeText.experienceinfo,
            lang.homeText.academyinfo,
            lang.homeText.aboutme,
            lang.homeText.softwareinfo,
            lang.homeText.designinfo,
            lang.homeText.devinfo,
        ]
    }
    
    return (
        <Box>
            <Grid container columnSpacing={{md:9,lg:12}}>
                <Grid item xs sm={4} md={5}>
                    <HomeMenuDesktop name={props.name} role={props.role} />
                </Grid>
                <Grid ref={testElement} item xs={12} sm={7} md={7}
                    sx={{
                        px: {
                            xs:6,
                            sm:7,
                            md:10,
                        },
                        pb:20,
                    }}
                >   <Stack sx={{width:'100%',height:'100vh',justifyContent:'center'}}>
                        <HelpMenu themeSend={(data)=>{props.themeSend(data)}} />
                        <img style={{width:'220px',marginBottom:'15px'}} src={logo} alt={logo} className='fade' />
                        <Typography className='fade fade1' variant='h1' style={{marginBottom:'35px'}}>{lang.homeText.resume}</Typography>
                        <Typography variant='body1' style={{marginBottom:'35px',lineHeight:'1.3rem',}} className='fade fade2'>
                            {lang.homeText.titles}
                            <br />
                            {lang.homeText.titles2}
                            <br />
                            {lang.homeText.location}
                        </Typography>
                        <Box sx={{display:'flex',alignItems:'center'}} className='fade fade3'>
                            <Box sx={{
                                    width:'80px',
                                    height:'80px',
                                    bgcolor:'primary.main',
                                    borderRadius:'50%',
                                    marginRight:'20px',
                                }}></Box>
                                <Typography variant='h5'>Esteban <br />Cazares Cruz</Typography>
                        </Box>
                        <Box className='fade' sx={{display:'flex', alignItems:'center',justifyContent:'center',mt:5}}>
                            <Typography variant='body1'>Scroll</Typography>
                                <Box className={style.scrollContainer}>
                                <Box sx={{bgcolor:'text.primary'}} className={style.scrollBall}></Box>
                            </Box>
                        </Box>
                        <Box className={style.card + ' fade'} sx={
                                {
                                    bottom:'25%',
                                    right:'0',
                                    cursor:'auto !important',
                                    width:'6%',
                                    height:'15%',
                                    backgroundImage: `url(${image})`,
                                    backgroundPosition:'center',
                                }
                            }>
                                <Box className={style.cardOverlay}>
                                </Box>
                        </Box>
                        <div className={style.textDecoration}>{lang.homeText.resume}</div>
                    </Stack>

                    <Submenu info={infoPosition[0]}/>
                    <Submenu info={infoPosition[1]}/>
                    <Submenu info={infoPosition[2]}/>
                    <Submenu info={infoPosition[3]}/>
                    <Submenu info={infoPosition[4]}/>
                    <Submenu info={infoPosition[5]}/>
                    
                    <Stack sx={{maxWidth:'320px'}} spacing={2}>
                        <Button startIcon={<DownloadIcon />} variant='contained'><a href={cv} download='Esteban_Cazares_Cruz_Cv'>{lang.homeText.downloadCv}</a></Button>
                        <Button startIcon={<EmailIcon />} variant='outlined'><a href='mailto:ecazaresc@yahoo.com.mx'>{lang.homeText.sendEmail}</a></Button>
                        <Button startIcon={<WhatsAppIcon />} variant='outlined'><a rel="noreferrer" target="_blank" href='https://wa.me/5549386144'>{lang.homeText.sendWa}</a></Button>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
            
        </Box>
    )
}
export default Home


