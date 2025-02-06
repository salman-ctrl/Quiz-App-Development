import React from 'react'
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className='flex flex-col h-screen bg-blue-300'>
            <Link to="/">Mata Pelajaran</Link> <Link to="/quiz">Daftar Quiz</Link>
            <Outlet />
        </div>
    )
}

export default RootLayout
