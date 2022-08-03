import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import SimpleBottomNavigation from './components/SimpleBottomNavigation'

const MainApp = () =>{
    return (
        <Fragment>
            <Outlet />
            <SimpleBottomNavigation />
        </Fragment>
    )
}
export default MainApp