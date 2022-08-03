import React, {Fragment} from 'react'
import {
    Box,
} from '@mui/material'
import ProyectBox from './ProyectBox'

const ProyectBoxContainer = (props)=>{

    const style = {
        width:{
            xs:'100%',
            sm:'29%',
        },
        mx: 1,
    }
    
    return (
        <Fragment>
            <Box sx={{
                        width:'100%',
                        overflowX:'auto',
                        display:'flex',
                        flexWrap:'wrap',
                    }}>
                <Box sx={style} className='fade'>
                    <ProyectBox info={props.info1} />
                </Box>
                <Box sx={style} className='fade fade1'>
                    <ProyectBox info={props.info2} />
                </Box>
                { props.info3? <Fragment><Box sx={style} className='fade fade2'><ProyectBox info={props.info3} /></Box></Fragment>:null }
            </Box>
        </Fragment>
    )
}
export default ProyectBoxContainer