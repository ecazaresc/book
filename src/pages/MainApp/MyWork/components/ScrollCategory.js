import React, { Fragment, useContext } from 'react'
import { 
    Box,
} from '@mui/material'
import { LangContext } from '../../../MyAppRoutes/MyAppRoutes'
import MoreWorkOptions from './MoreWorkOptions'


const ScrollCategory = ()=> {
    let lang = useContext(LangContext)
    
    return (
        <Fragment>
            <Box className='fade fade5' sx={{
                position:'sticky',
                top:70,
                pt: 3,
                mb: 10,
            }}>
                <Box sx={{
                    width: '100%',
                    height: '2px',
                    bgcolor: 'primary.main',
                    position: 'absolute',
                    top: '56px',
                    right: '0px',
                }}></Box>
                { lang.categories.map((category,index)=>{
                    let opacitySetter = 0.7/index
                    
                    return (
                        <Box key={category + index} sx={{fontFamily:'MontserratBold',my:1, color:'primary.dark',opacity:opacitySetter,}}>{category}</Box>
                    )
                }) }
                <Box sx={{
                    width: '100%',
                    height: 70,
                }}></Box>
                <MoreWorkOptions />
            </Box>
            
        </Fragment>
    )
}
export default ScrollCategory