import React,{useState} from 'react'
import { Box } from '@mui/material'
import {
    Routes,
    Route,
} from "react-router-dom"
import Language from '../Onboarding/components/Language'
import Role from '../Onboarding/components/Role'
import Onboard from '../Onboarding/Onboard'
import NameInput from '../Onboarding/components/NameInput'
import Greetings from '../Onboarding/components/Greetings'
import ProyectContainer from '../MainApp/MyWork/components/ProyectContainer'
import MyWork from '../MainApp/MyWork'
import MainApp from '../MainApp'
import NoMatch from '../NoMatch'
import { GetEn } from '../../assets/lang/en'
import { GetEs } from '../../assets/lang/es'
import AppTransition from '../AppTransition'
import Test from '../Test'

const Home = React.lazy(() => import("../MainApp/Home"))
const SihoApp = React.lazy(() => import("../SihoApp"))

export const LangContext = React.createContext()

const MyAppRoutes = (props)=> {
    let en = GetEn()
    let es = GetEs()
    const [skipB, setSkipB] = useState(true)
    const [name, setName] = useState('Guest')
    const [lang, setLang] = useState(es)
    const [role, setRole] = useState('recruiter')
    const [direction,setDirection] = useState(true)
    
    const roleHandler = (data)=> {
        setRole(data)
    }
    const nameHandler = (data)=> {
        setName(data)
    }
    const langHandler = (data)=> {
        data? setLang(en):setLang(es)
        setSkipB(false)
    }
    const proyect = lang.mywork
    const proyectsArray = [
        {
            mainProyect: proyect.siho,
            other1:proyect.anew,
            other2:proyect.book,
        },
        {
            mainProyect: proyect.anew,
            other1:proyect.book,
            other2:proyect.sucream,
        },
        {
            mainProyect: proyect.book,
            other1:proyect.kiosk,
            other2:proyect.smonkeys,
        },
        {
            mainProyect: proyect.kiosk,
            other1:proyect.book,
            other2:proyect.anew,
        },
        {
            mainProyect: proyect.smonkeys,
            other1:proyect.sucream,
            other2:proyect.dentalist,
        },
        {
            mainProyect: proyect.sucream,
            other1:proyect.dentalist,
            other2:proyect.orange,
        },
        {
            mainProyect: proyect.dentalist,
            other1:proyect.sucream,
            other2: proyect.orange,
        },
        {
            mainProyect: proyect.orange,
            other1: proyect.employCode,
            other2:proyect.dentalist,
        },
        {
            mainProyect: proyect.employCode,
            other1:proyect.orange,
            other2:proyect.sucream,
        }
    ]
    return (
        <LangContext.Provider value={lang}>
            <Box sx={{width:'100vw',minHeight:'100vh',bgcolor:'background.default'}}>
                <Routes>
                    <Route path="/" element={<Onboard skipButton={skipB} />}>
                        <Route index element={<Language 
                                                    onSendLang={langHandler}
                                                    />}>
                        </Route>
                        <Route path="/o/role" element={<Role onSendRole={roleHandler} />}></Route>
                        <Route path="/o/name-input" element={<NameInput onSendName={nameHandler} />}></Route>
                        <Route path="/o/greetings" element={<Greetings profile={name} />}></Route>
                    </Route>
                    <Route path="/test" element={<Test />}/>
                    <Route path="*" element={<NoMatch />}/>
                    <Route path="/home" element={<MainApp />}>
                        <Route index element={<React.Suspense fallback={<>...</>}>
                                                    <Home name={name} role={role} themeSend={(data)=>{props.themeSend(data)}} />
                                                </React.Suspense>} />
                        <Route path='/home/w' element={<MyWork />} />
                        { proyectsArray.map((proyectSelected)=>{
                            return(
                                <Route path={'/home/w/' + proyectSelected.mainProyect.target} element={<ProyectContainer history={props.history}
                                    more={[proyectSelected.other1,proyectSelected.other2]} name={name} proyect={proyectSelected.mainProyect} />} />
                            )
                        }) }  
                        

                    </Route>

                    <Route path="/sihoApp/*" element={
                        <React.Suspense fallback={<>...</>}>
                            <SihoApp name={name} />
                        </React.Suspense>} />
                    <Route path="/transition" element={<AppTransition name={name} direction={direction} onSendDirection={(data)=>setDirection(data)} />}></Route>
                </Routes>
            </Box>
        </LangContext.Provider>
    )
}

export default MyAppRoutes