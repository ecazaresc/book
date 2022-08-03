import React, {
    Fragment,
    useState,
    useContext,
} from "react"
import { 
    Typography,
    Button,
    TextField,
    Box,
 } from "@mui/material"
 import { useNavigate } from 'react-router-dom'
 import { LangContext } from "../../MyAppRoutes/MyAppRoutes"

const NameInput = (props)=>{
    const lang = useContext(LangContext)
    const [name,setName] = useState(null)
    const [disabledB,setDisabledB] = useState(true)
    const [error,setError] = useState(false)
    const [text,setText] = useState(' ')
    let navigate = useNavigate();
    
    const changeHandler =(e)=>{
        let names = e.target.value
        setName(names)
        if(names.length >= 3){
            setDisabledB(false)
            setError(false)
            setText(lang.onboard.helperNameReady)
        } else {
            setDisabledB(true)
            setError(true)
            setText(lang.onboard.helperNameError)
        }
    }
    const handler =()=>{
        props.onSendName(name)
        navigate('/o/greetings')
    }
    return(
        <Fragment>
            <Typography className={'fade'} variant='h3'>{lang.onboard.nameText}</Typography>
            <Box sx={
                    {
                        marginTop: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        width:'100%',
                        '& div,& button': {
                            width:'100%',
                            maxWidth:'312px',
                        }
                    }
                }>
                <TextField 
                        helperText={text}
                        error={error} 
                        id="nameInput" 
                        variant="outlined" 
                        onChange={changeHandler} 
                        label={lang.onboard.name}
                        className={'fade'}
                        style={{animationDelay:'100ms'}}
                        inputProps={{ maxLength: 10,autoComplete:'off' }}
                />
                <Button style={{animationDelay:'250ms',marginTop:'10px'}} className={'fade'} onClick={handler} disabled={disabledB} variant='contained'>{lang.continue}</Button>
            </Box>
        </Fragment>
        
    )
}
export default NameInput