import React, { Fragment, useContext } from 'react'
import { 
    Box,
    Grid,
    Tabs,
    Tab,
    Typography,
 } from '@mui/material'
import ProyectContent from './ProyectContent'
import { LangContext } from '../../../MyAppRoutes/MyAppRoutes'
import ProyectBox from './ProyectBox'
import ToolBarDesktop from '../../components/ToolBarDesktop'

 function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    )
  }


const ProyectContainer = ({proyect,history,name,more})=> {
    
    const lang = useContext(LangContext)
    const [value, setValue] = React.useState(0)


    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
    
    return (
        <Fragment>
          <Box sx={{
                display:{
                    xs:'none',
                    sm:'block',
                }
            }} >
                <ToolBarDesktop history={history} />
            </Box>
            <Box sx={{bgcolor:'background.default'}}>
                <Box sx={{
                    width:'100vw',
                    height:'45vh',
                    backgroundColor:'#cacaca',
                    backgroundImage:`url(${proyect.img})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center',
                  }}>
                </Box>
                
                <Grid container spacing={2} sx={
                        {
                            px: {
                                xs: 1,
                                sm: 7,
                                md: 15,
                                lg: 27,
                            },
                            pt: 4,
                            pb: 20,
                        }
                    }>
                    <Grid item xs={12}>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb:4 }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                                    <Tab label={lang.mywork.tabsDesign} sx={{flexGrow:'1'}} id='simple-tab-0' aria-controls='simple-tabpanel-0' />
                                    <Tab label={lang.mywork.tabsCode} disabled={!proyect.tab} sx={{flexGrow:'1'}} id='simple-tab-1' aria-controls='simple-tabpanel-1' />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <ProyectContent info={proyect.design} name={name} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                { proyect.tab? <ProyectContent info={proyect.code} name={name} />:<Typography variant='h5' sx={{textAlign:'center'}}>{lang.noContent}</Typography> }
                            </TabPanel>
                        </Box>
                    </Grid>
                    <Grid item container xs={12} md={9} columnSpacing={3} sx={{px:3}}>
                      <Grid item xs={12} sx={{mb:2,mt:10}}>
                        <Typography variant='h6' sx={{textAlign:'center'}}>{lang.more}</Typography>
                      </Grid>
                      <Grid item xs={12} sm>
                        <ProyectBox info={more[0]} />
                      </Grid>
                      <Grid item xs={12} sm>
                        <ProyectBox info={more[1]} />
                      </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}
export default ProyectContainer