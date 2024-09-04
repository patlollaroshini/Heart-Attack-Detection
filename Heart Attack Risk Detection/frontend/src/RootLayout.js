import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar/Navbar';
function RootLayout(){

    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}

export default RootLayout;