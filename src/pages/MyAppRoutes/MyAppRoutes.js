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
    
    const proyect = lang
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

                        <Route path='/home/w/siho' element={<ProyectContainer history={props.history}
                                more={[proyect.mywork.anew,proyect.mywork.kiosk]} name={name} proyect={proyect.mywork.siho} />} />

                        <Route path='/home/w/sucream' element={<ProyectContainer history={props.history}
                                more={[proyect.mywork.dentalist,proyect.mywork.smonkeys]} proyect={proyect.mywork.sucream} />} />

                        <Route path='/home/w/dentalist' element={<ProyectContainer history={props.history}
                                more={[proyect.mywork.sucream,proyect.mywork.anew]} proyect={proyect.mywork.dentalist} />} />

                        <Route path='/home/w/employees-code' element={<ProyectContainer history={props.history} 
                                more={[proyect.mywork.orange,proyect.mywork.siho]} proyect={proyect.mywork.employCode} />} />

                        <Route path='/home/w/orange' element={<ProyectContainer history={props.history}
                                more={[proyect.mywork.employCode,proyect.mywork.sucream]} proyect={proyect.mywork.orange} />} />

                        <Route path='/home/w/kiosk' element={<ProyectContainer history={props.history}
                                more={[proyect.mywork.sucream,proyect.mywork.siho]} name={name} proyect={proyect.mywork.kiosk} />} />

                        <Route path='/home/w/anew' element={<ProyectContainer history={props.history}
                                more={[proyect.mywork.kiosk,proyect.mywork.sucream]} name={name} proyect={proyect.mywork.anew} />} />

                        <Route path='/home/w/smonkeys' element={<ProyectContainer history={props.history}
                                more={[proyect.mywork.employCode,proyect.mywork.sucream]} name={name} proyect={proyect.mywork.smonkeys} />} />
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