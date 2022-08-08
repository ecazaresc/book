import React, {Fragment} from 'react'
import {
    Box,
    Typography,
    Grid,
    Stack,
} from '@mui/material'
import { 
    cyan,
  } from '@mui/material/colors'


export default function Footer() {
    return(
        <Fragment>
            <Box sx={{
                    width:'100%',
                    height:{
                        xs:'30vh',
                        md:'20vh',
                    },
                    bgcolor:cyan[900],
                    p:{
                        xs:4,
                        sm:5,
                    }
                }}>
                    <Grid container justifyContent='flex-end'>
                        <Grid item xs={12} sm={7}>
                            <Stack>
                                <Typography variant='body1' color='common.white'><b>Esteban Cazares Cruz</b></Typography>
                                <Typography variant='body1' color='common.white'><b>Email:</b> ecazaresc@yahoo.com.mx</Typography>
                                <Typography variant='body1' color='common.white'><b>Cel:</b> 55 4938 6144</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
            </Box>
        </Fragment>
    )
}