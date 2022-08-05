import React, {Fragment} from 'react'
import { 
    Button,
    Typography,
    Box,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useNavigate } from 'react-router-dom'
import img from '../../../assets/images/ecazaresc_lg_5.jpg'
import blue from '@mui/material/colors/blue'

const Login = ({name})=>{
    let navigate = useNavigate()
    const [values, setValues] = React.useState({
        showPassword: false,
        password: 'Password1234',
    })
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value })
    }
    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        })
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    return(
        <Fragment>
            <Box sx={{
                    width:'100vw',minHeight:'100vh',
                    bgcolor:'background.default',
                    display:'flex',
                }}>
                    <Box sx={{
                            width:{
                                sm:'30vw',
                                md:'45vw',
                            },
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            display:{
                                xs:'none',
                                sm:'block',
                            }
                        }}>
                        
                    </Box>
                    <Box sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                flexGrow:1,
                            }}>
                            <Box sx={{
                                        width:'312px',
                                        '& > :not(style)':{
                                            width:'100%',
                                            mt:1,
                                        },
                                        '& > button':{
                                            mt:3,
                                        }
                                    }}>
                                <Box component="div" sx={{display:'flex', justifyContent:'center',mb:6}}>
                                    <Typography variant="h4" sx={{position:'relative',transform:'scale(1.5)',left:'-30px',width:52,color:blue[900]}} component="div">
                                        <b>SIHO</b>
                                        <span style={{fontSize:'10px', position:'absolute',bottom:'-4px',right:'-40px'}}>praxis.com</span>
                                    </Typography>
                                </Box> 
                                <Typography sx={{textAlign:'center'}} variant='h6'>LOGIN</Typography>
                                <TextField 
                                    id="user"
                                    label="Usuario"
                                    variant="outlined"
                                    value={ name + '@email.com'}
                                    helperText=' '
                                    inputProps={{ maxLength: 10,autoComplete:'off' }}
                                />
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                <Button onClick={()=>navigate('/sihoApp/home')} variant='contained'>Entrar</Button>
                                <Button disabled variant='text'>Olvide mi contraseña</Button>
                                <Button onClick={()=>navigate('/transition')} variant='text'>Regresar a mi book</Button>
                            </Box>
                    </Box>
            </Box>
        </Fragment>
    )
}
export default Login